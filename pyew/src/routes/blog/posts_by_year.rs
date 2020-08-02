use yew::prelude::*;
pub use crate::components::BlogNav;

/// PostsByYear page
pub struct PostsByYear;

#[derive(Properties, Clone)]
pub struct Props {
    year: u32,
}

impl Component for PostsByYear {
    type Message = ();
    type Properties = Props;

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        PostsByYear {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content blog-bymonth">
                <BlogNav/>
                <h1>{ "Blog PostsByMonth" }</h1>
                <h3>{ "Blog PostsByMonth go here" } </h3>
                <p> { "HERE IS WHERE POSTS BY MONTH GO" } </p>
            </div>
        }
    }
}

