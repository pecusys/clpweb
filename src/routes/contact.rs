use yew::prelude::*;
use crate::components::ContactForm;

/// Contact page
pub struct Contact;

impl Component for Contact {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Contact {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content contact">
                <h1>{"Contact"}</h1>
                <p>
                    { "Ways to contact me:" }
                </p>
                    <ContactForm/>
            </div>
        }
    }
}
