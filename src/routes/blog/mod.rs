use yew::prelude::*;
use yew_router::switch::Permissive;
use yew_router::{prelude::*, route::Route};

pub mod home;
pub mod post;

pub use home::BlogHome;
pub use crate::components::BlogNav;
pub use post::Post;

/// Blog routes
#[derive(Switch, Debug, Clone)]
pub enum BlogRoute {
    #[to = "/blog"]
    Home,
    #[to = "/blog/posts"]
    Posts,
    #[to = "/blog/post-not-found"]
    PageNotFound(Permissive<String>),
}

use yew::prelude::*;

pub struct Blog;

impl Component for Blog {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Blog {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <blog>
            <div class="content blog">
                <BlogNav />
                <Router<BlogRoute, ()>
                    render = Router::render(|switch: BlogRoute | {
                        match switch {
                            BlogRoute::Home => html!{ <BlogHome /> },
                            BlogRoute::Posts => html!{ <Post /> },
                            BlogRoute::PageNotFound(Permissive(None)) => html!{"Page not found"},
                            BlogRoute::PageNotFound(Permissive(Some(missed_route))) => html!{format!("Page '{}' not found", missed_route)}
                        }
                    } )
                    redirect = Router::redirect(|route: Route<()>| {
                        BlogRoute::PageNotFound(Permissive(Some(route.route)))
                    })
                />
            </div>
            </blog>
        }
    }
}
