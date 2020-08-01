use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::AppRoute;

/// Nav component
pub struct Nav;

impl Component for Nav {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Nav {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <nav>
                <ul>
                    <li class="site-title nav-item">
                        //<img src="bookmark-regular.svg"/>
                        { "chris_p" }
                    </li>
                    <li class="nav-item"><RouterAnchor<AppRoute> route=AppRoute::Home classes="app-link" >{ "Home" }</RouterAnchor<AppRoute>></li>
                    <li class="nav-item"><RouterAnchor<AppRoute> route=AppRoute::About classes="app-link">{ "About" }</RouterAnchor<AppRoute>></li>
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::Contact classes="app-link">{ "Contact" }</RouterAnchor<AppRoute>>
                    </li>
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::Projects classes="app-link">{ "Projects" }</RouterAnchor<AppRoute>>
                    </li>
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::Blog classes="app-link">{ "Blog" }</RouterAnchor<AppRoute>>
                    </li>
                    <li class="nav-right-link">
                        <a
                            href="https://github.com/pecusys"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        //<img src="../../static/github-brands.svg"/>
                        {"GitHub"}
                        </a>
                    </li>
                    <li class="nav-right-link">
                        <a
                            href="https://github.com/pecusys"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        //<img src="../../static/linkedin-in-brands.svg"/>
                        { "linkedIn" }
                        </a>
                    </li>
                </ul>
            </nav>
        }
    }
}
