use yew::prelude::*;

/// Home page
pub struct Home;

impl Component for Home {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Home {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content home">
                <h1>{ "Hi there!" }</h1>
                <h3>{ "You've made it to Chris P's evil lair!" } </h3>
                <p> { "Just goofin! This is a Rust + WASM portfolio/blog/hub to showcase projects I'm involved in. " } </p>
                <p> { "Come check back later!" } </p>
            </div>
        }
    }
}
