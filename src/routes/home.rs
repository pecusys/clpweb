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
                <h1>{ "Home" }</h1>
                <h3>{ "Welcome to chris.pecunies.com" } </h3>
                <p> { "This will be my forseeable website and portal to other things, for the time being" } </p>
                <br/><br/>
                <div class="info-box">
                <p>{"Check out my GitHub: "}</p>
                <p><a href="https://github.com/pecusys">
                <button
                        type="submit"
                        >{" GitHub " }</button>
                </a></p>
                <p>{"Or my old design for a personal website (ew): "}</p>
                <p><a href="https://im.chrisp.cc">
                <button
                        type="submit"
                        >{" old site " }</button>
                </a></p>
                <p>{"Or a CRUD full stack app I'm working on: "}</p>
                <p><a href="https://dev.memr.is">
                <button
                        type="submit"
                        >{" div.is " }</button>
                </a></p>
                </div>
            </div>
        }
    }
}
