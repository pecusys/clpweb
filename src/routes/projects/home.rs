use yew::prelude::*;
use crate::components::projects_nav::ProjectsNav;

/// Projects page
pub struct ProjectsHome;

impl Component for ProjectsHome {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        ProjectsHome {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content projects">
                <ProjectsNav/>
                <h1>{ "Projects Home" }</h1>
                <h3>{ "Directory for projects, big and small" } </h3>
            </div>
        }
    }
}
