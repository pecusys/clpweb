use yew::prelude::*;
use crate::components::projects_nav::ProjectsNav;

/// Projects page
pub struct Charts;

impl Component for Charts {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Charts {}
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
                <h1>{ "Charts Demo" }</h1>
                <h3>{ "Demo for data visualization in Yew" } </h3>
            </div>
        }
    }
}
