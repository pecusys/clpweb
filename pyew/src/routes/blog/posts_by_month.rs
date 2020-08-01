use yew::prelude::*;

/// PostsByMonth page
pub struct PostsByMonth;

impl Component for PostsByMonth {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        PostsByMonth {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content blog-posts">
                <h1>{ "Blog posts" }</h1>
                <h2>{ "Blog posts go here" } </h2>
                <p> { "to do" } </p>
            </div>
        }
    }
}
