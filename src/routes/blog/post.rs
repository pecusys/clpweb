use yew::prelude::*;

/// Post page
pub struct Post;

impl Component for Post {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Post {}
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
                <h1>{ "Blog posts" }</h1>
                <h2>{ "Blog posts go here" } </h2>
                <p> { "to do" } </p>

            </div>
        }
    }
}
