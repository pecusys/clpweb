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
            <div class="content blog-home">
                <h1>{ "Blog Home" } </h1>
                <h3>{ "Welcome to the blog" } </h3>
                <p> { "This is the index page" } </p>
            </div>
        }
    }
}
