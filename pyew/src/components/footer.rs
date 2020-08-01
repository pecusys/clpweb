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
                <p>{ "Home - About - Contact"}</p>
                <p>{ "© 2020, Chris Pecunies -- or something like that" }</p>
                <p>{ "I am a footer footy footy foot" }</p>
            </div>
        }
    }
}
