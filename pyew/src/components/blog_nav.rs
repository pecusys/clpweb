use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::blog::BlogRoute;

/// BlogNav component
pub struct BlogNav;

impl Component for BlogNav {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        BlogNav {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="subnav-or blognav">
                <ul>
                    <li class="BlogNav-item">
                        <RouterAnchor<BlogRoute> 
                            route=BlogRoute::Home 
                            classes="app-link">
                            { "Blog Home" }
                        </RouterAnchor<BlogRoute>>
                    </li>
                    <li class="BlogNav-item">
                        <RouterAnchor<BlogRoute> 
                            route=BlogRoute::Posts 
                            classes="app-link">
                            { "Posts" }
                        </RouterAnchor<BlogRoute>>
                    </li>
                    <li class="BlogNav-item">
                        <RouterAnchor<BlogRoute> 
                            route=BlogRoute::PostsByYear { year: 20 }
                            classes="app-link">
                            { "Posts by year" }
                        </RouterAnchor<BlogRoute>>
                    </li>
                </ul>
            </div>
        }
    }
}
