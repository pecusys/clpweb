use yew::prelude::*;

/// Projects page
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
            <div class="content projects">
                <h1>{ "Projects" }</h1>
                <h3>{ "Directory for projects, big and small" } </h3>
                <div class="subnav-or projnav">
                <ul>
                <li>
                    <a href="#">{ "Item 1" }</a>
                </li>
                <li>
                    <a href="#">{ "Item 2" }</a>
                </li>
                <li>
                    <a href="#">{ "Item 3" }</a>
                </li>
                <li>
                    <a href="#">{ "Item 4" }</a>
                </li>
                </ul>
                </div>
                <p> { "Where I will put little WASM experiments as well as links to bigger projects I'm working on (when I decide to)" } </p>

            </div>
        }
    }
}
