//TODO fix routing so i can go to chrisp.cc/about and get where i wanna be 

use yew::prelude::*;
use yew_router::switch::Permissive;
use yew_router::{prelude::*, route::Route};

use crate::components::{Nav, Footer};
use crate::routes::{Home, About, Contact, AppRoute};
use crate::routes::blog::{
    BlogHome, Blog, BlogPost, Posts, PostsByYear, PostsByMonth,
};
use crate::routes::projects::{
    Projects, ProjectsHome, Portfolio, Charts
};
use crate::routes::{BlogRoute, ProjectsRoute};
use crate::services::fetch;

/// Root component
pub struct App;

pub struct Props {

}

pub enum Msg {
    IsChangingPage,

}

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        App {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <app>
                <div class="wrapper">
                    <Nav />
                    <Router<AppRoute, ()>
                        render = Router::render(|switch: AppRoute | {
                            match switch {
                                AppRoute::Home => html!{ <Home /> },
                                AppRoute::About => html!{ <About /> },
                                AppRoute::Contact => html!{ <Contact /> },
                                AppRoute::Blog(BlogRoute::Home) => html!{ <BlogHome /> },
                                //AppRoute::Blog(BlogRoute::BlogPost) => html!{ <BlogPost /> },
                                AppRoute::Blog(BlogRoute::Posts) => html!{ <Posts /> },
                                AppRoute::Blog(BlogRoute::PageNotFound(Permissive(None))) => html!{"Page not found"},
                                AppRoute::Blog(BlogRoute::PageNotFound(Permissive(Some(page)))) => html!{format!("Page {} not found", page)},
                                AppRoute::Projects(ProjectsRoute::PageNotFound(Permissive(None))) => html!{"Project not found"},
                                AppRoute::Projects(ProjectsRoute::PageNotFound(Permissive(Some(page)))) => html!{format!("Page {} not found", page)},
                                //AppRoute::Blog(BlogRoute::PostsByYear) => html!{ <PostsByYear /> },
                                //AppRoute::Blog(BlogRoute::PostsByMonth) => html!{ <PostsByMonth /> },
                                AppRoute::Projects(ProjectsRoute::Home) => html!{ <ProjectsHome /> },
                                AppRoute::Projects(ProjectsRoute::Portfolio) => html!{ <Portfolio /> },
                                AppRoute::Projects(ProjectsRoute::Charts) => html!{ <Charts /> },
                                AppRoute::PageNotFound(Permissive(None)) => html!{"Page not found"},
                                AppRoute::PageNotFound(Permissive(Some(missed_route))) => html!{format!("Page '{}' not found", missed_route)}
                            }
                        } )
                        redirect = Router::redirect(|route: Route<()>| {
                            AppRoute::PageNotFound(Permissive(Some(route.route)))
                        })
                    />
                    </div>
                    <Footer />
            </app>
        }
    }
}
