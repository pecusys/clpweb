use yew::prelude::*;

/// BlogPost page
pub struct BlogPost;

impl Component for BlogPost {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        BlogPost {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content blog-blogpost">
                <h1>{ "Blog BlogPost" }</h1>
                <h3>{ "Blog BlogPost go here" } </h3>
                <p> { "to do" } </p>
            </div>
        }
    }
}
