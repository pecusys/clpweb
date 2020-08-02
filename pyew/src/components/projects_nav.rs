use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::{AppRoute, ProjectsRoute};

/// ProjectsNav component
pub struct ProjectsNav;

impl Component for ProjectsNav {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        ProjectsNav {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="subnav-or ProjectsNav">
                <ul>
                    <li class="ProjectsNav-item">
                        <RouterAnchor<AppRoute> 
                            route=AppRoute::Projects(ProjectsRoute::Home)
                            classes="app-link">
                            { "Home" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    <li class="ProjectsNav-item">
                        <RouterAnchor<AppRoute> 
                            route=AppRoute::Projects(ProjectsRoute::Portfolio)
                            classes="app-link">
                            { "Portfolio" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    <li class="ProjectsNav-item">
                        <RouterAnchor<AppRoute> 
                            route=AppRoute::Projects(ProjectsRoute::Charts)
                            classes="app-link">
                            { "Charts" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    <li class="ProjectsNav-item">
                        <a href="#">
                            { "Item 3" }
                        </a>
                    </li>
                    <li class="ProjectsNav-item">
                        <a href="#">
                            { "Item 4" }
                        </a>
                    </li>
                </ul>
            </div>
        }
    }
}
