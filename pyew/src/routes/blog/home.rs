use yew::prelude::*;

pub use crate::components::BlogNav;

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
                <BlogNav/>
                <h1>{ "Blog Home" } </h1>
                <h3>{ "Welcome to the blog" } </h3>
                <p> { "This is the index page" } </p>
                <p> { "Jeez yew-router is difficult to figure out, I'll get the hang of it though!" } </p>
                <p> { "Jeez yew-router is difficult to figure out, I'll get the hang of it though!" } </p>
            </div>
        }
    }
}
