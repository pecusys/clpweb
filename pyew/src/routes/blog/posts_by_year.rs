use yew::prelude::*;

/// PostsByYear page
pub struct PostsByYear;

impl Component for PostsByYear {
    type Message = ();
    type Properties = ();

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
                <h1>{ "Blog PostsByMonth" }</h1>
                <h3>{ "Blog PostsByMonth go here" } </h3>
                <p> { "HERE IS WHERE POSTS BY MONTH GO" } </p>
            </div>
        }
    }
}

