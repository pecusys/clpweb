pub mod home;
pub mod charts;
pub mod portfolio;

use yew::prelude::*;
use yew_router::prelude::*;
use yew_router::switch::Permissive;

use crate::components::projects_nav::ProjectsNav;
use crate::routes::AppRoute;
use crate::routes::ProjectsRoute;
pub use home::ProjectsHome;
pub use charts::Charts;
pub use portfolio::Portfolio;

pub struct Projects;

impl Component for Projects {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Projects {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <projects>
            <div class="content projects">
                <ProjectsNav />
                <ProjectsHome />
            </div>
            </projects>
        }
    }
}
