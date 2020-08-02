use yew::prelude::*;

/// Home page
pub struct Home;

impl Component for Home {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Home {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="content home">
                <h1>{ "Hi there!" }</h1>
                <h3>{ "You've made it to Chris P's evil lair!" } </h3>
                <p> { "Just goofin! This is a Rust + WASM portfolio/blog/hub to showcase projects I'm involved in. " } </p>
                <p> { "Come check back later!" } </p>
                <br/><br/>
                <div class="info-box-or">
                <p>{"Check out my GitHub: "}</p>
                <p><a href="https://github.com/pecusys">
                <button
                        type="submit"
                        class="button-or"
                        >{" GitHub " }</button>
                </a></p>
                <p>{"Or my old design for a personal website (ew): "}</p>
                <p><a href="https://im.chrisp.cc">
                <button
                        type="submit"
                        class="button-or"
                        >{" old site " }</button>
                </a></p>
                <p>{"Or a CRUD full stack app I'm working on: "}</p>
                <p><a href="https://dev.memr.is">
                <button
                        type="submit"
                        class="button-or"
                        >{" div.is " }</button>
                </a></p>
                </div>
            </div>
        }
    }
}
