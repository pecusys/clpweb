use yew::prelude::*;

/// BlogHome page
pub struct BlogHome;

impl Component for BlogHome {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        BlogHome {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content blog">
                <h1>{ "Blog" }</h1>
                <h2>{ "Blog post listing goes here!" } </h2>
                <p> { "to do" } </p>

            </div>
        }
    }
}
