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
                <p> { "Since I'm still working on the site, I'll keep it short and sweet for now." } </p>
                <p> { "I'm a recent UW Seattle Materials Science & Engineering graduate, with a strong bend towards software, data science, " } </p>
                <p> { "and leveraging computational power and techniques to make strides in solving physical engineering problems." } </p>
                <br/>
                <div class="info-box-or">
                <p>{"Check out my GitHub: "}</p>
                <p><a href="https://github.com/pecusys">
                <button
                        type="submit"
                        class="outline"
                        >{" GitHub " }</button>
                </a></p>
                <p>{"Or my old design for a personal website (ew): "}</p>
                <p><a href="https://im.chrisp.cc">
                <button
                        type="submit"
                        class="outline"
                        >{" old site " }</button>
                </a></p>
                <p>{"Or a CRUD full stack app I'm working on: "}</p>
                <p><a href="https://dev.memr.is">
                <button
                        type="submit"
                        class="outline"
                        >{" div.is " }</button>
                </a></p>
                </div>
            </div>
        }
    }
}
