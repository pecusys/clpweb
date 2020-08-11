use yew::prelude::*;
use crate::components::projects_nav::ProjectsNav;

/// Projects page
pub struct Portfolio;

impl Component for Portfolio {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Portfolio {}
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
                <h1>{ "Portfolio" }</h1>
                <h3>{ "Where I will display, explain, and link to external projects I've worked on / made" } </h3>
            </div>
        }
    }
}
