pub mod home;
pub mod blog_post;
pub mod posts;
pub mod posts_by_year;

use yew::prelude::*;
use yew_router::prelude::*;
use yew_router::switch::Permissive;

pub use home::BlogHome;
pub use crate::routes::BlogRoute;
pub use crate::components::BlogNav;
pub use posts::Posts;
pub use posts_by_year::PostsByYear;
pub use blog_post::BlogPost;

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
                            BlogRoute::Posts => html!{ <Posts /> },
                            BlogRoute::PostsByYear{year: 20} => html!{ <PostsByYear /> },
                            //BlogRoute::PageNotFound(Permissive(None)) => html!{"Page not found"},
                            //BlogRoute::PageNotFound(Permissive(Some(missed_route))) => html!{format!("Page '{}' not found", missed_route)},
                            _ => html!{format!("whatevs")},
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
