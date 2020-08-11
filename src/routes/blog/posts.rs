use yew::prelude::*;
pub use crate::components::BlogNav;

/// Posts page
pub struct Posts;

impl Component for Posts {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Posts {}
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
                <BlogNav/>
                <h1>{ "Blog Posts" } </h1>
                <h3>{ "This is the blog posts directory" } </h3>
                <p> { "Lorem ipsum and whatnot" } </p>
            </div>
        }
    }
}
