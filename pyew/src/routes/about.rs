use yew::prelude::*;

/// About page
pub struct About;

impl Component for About {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        About {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content about">
                <h1> { "About" } </h1>
                <p>
                    { "Check out my " }
                    <a
                        href="https://github.com/pecusys"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        { "GitHub" }
                    </a>
                    { " account if you want."}
                </p>
                <p>
                    { "Edit " } <code>{ "src/components/about.rs" }</code> { " and save to reload." }
                </p>
            </div>
        }
    }
}
