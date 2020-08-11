use yew::prelude::*;
pub use crate::components::BlogNav;

/// PostsByMonth page
pub struct PostsByMonth;

#[derive(Properties, Clone)]
pub struct Props {
    pub year: u32,
    pub month: u32,
}

impl Component for PostsByMonth {
    type Message = ();
    type Properties = Props;

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
                <BlogNav/>
                <h1>{ "Blog posts" }</h1>
                <h2>{ "Blog posts go here" } </h2>
                <p> { "to do" } </p>
            </div>
        }
    }
}
