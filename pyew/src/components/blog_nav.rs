use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::{AppRoute, BlogRoute};

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
                        <RouterAnchor<AppRoute> 
                            route=AppRoute::Blog(BlogRoute::Home)
                            classes="app-link">
                            { "Blog Home" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    <li class="BlogNav-item">
                        <RouterAnchor<AppRoute> 
                            route=AppRoute::Blog(BlogRoute::Posts)
                            classes="app-link">
                            { "Posts" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    //<li class="BlogNav-item">
                        //<RouterAnchor<BlogRoute> 
                            //route=BlogRoute::PostsByYear { year: 20 }
                            //classes="app-link">
                            //{ "Posts by year" }
                        //</RouterAnchor<BlogRoute>>
                    //</li>
                    <li class="BlogNav-item">
                        <a href="#">
                            { "Item 4" }
                        </a>
                    </li>
                </ul>
            </div>
        }
    }
}
