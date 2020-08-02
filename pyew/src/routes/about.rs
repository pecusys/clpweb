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
                <div class="info-box-or">
                <p> { "Since I'm still working on the site, I'll keep it short and sweet for now." } </p>
                <p> { "I'm a recent UW Seattle Materials Science & Engineering graduate, with a strong bend towards software, data science, " } </p>
                <p> { "and leveraging computational power and techniques to make strides in solving physical engineering problems." } </p>
                    </div>
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
                    { "More to come!" }
                </p>
            </div>
        }
    }
}
