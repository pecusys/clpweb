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
                <a href="https://github.com/pecusys">
                <br/><br/>
                <button
                        type="submit"
                        >{" GitHub " }</button>
                </a>
            </div>
        }
    }
}
