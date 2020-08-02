use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::AppRoute;

/// Footer component
pub struct Footer;

impl Component for Footer {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Footer {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="footer">
                <p>{ "© 2020, Chris Pecunies - or something like that. It's not much, but I made it!" }</p>
                <p>
                    <RouterAnchor<AppRoute> 
                        route=AppRoute::Home 
                        classes="app-link" >
                        { "Home - " } 
                    </RouterAnchor<AppRoute>>
                    <RouterAnchor<AppRoute> 
                        route=AppRoute::About 
                        classes="app-link" >
                        { "About - " }
                    </RouterAnchor<AppRoute>>
                    <RouterAnchor<AppRoute> 
                        route=AppRoute::Contact 
                        classes="app-link" >
                        { "Contact - " }
                    </RouterAnchor<AppRoute>>
                    <RouterAnchor<AppRoute> 
                        route=AppRoute::Contact 
                        classes="app-link" >
                        { "Projects - " }
                    </RouterAnchor<AppRoute>>
                    <RouterAnchor<AppRoute> 
                        route=AppRoute::Contact 
                        classes="app-link" >
                        { "Blog" }
                    </RouterAnchor<AppRoute>>
                </p>
                <p>{ "I am a footer footy footy foot" }</p>
            </div>
        }
    }
}
