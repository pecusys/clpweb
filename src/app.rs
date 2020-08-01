use yew::prelude::*;
use yew_router::switch::Permissive;
use yew_router::{prelude::*, route::Route};

use crate::components::{Nav, Footer};
use crate::routes::{Home, About, Contact, Blog, Projects, AppRoute};
use crate::services::fetch;

/// Root component
pub struct App;

pub struct Props {

}

pub enum Msg {
    IsChangingPage,

}

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        App {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <app>
                <div class="wrapper">
                    <Nav />
                    <Router<AppRoute, ()>
                        render = Router::render(|switch: AppRoute | {
                            match switch {
                                AppRoute::Home => html!{ <Home /> },
                                AppRoute::About => html!{ <About /> },
                                AppRoute::Contact => html!{ <Contact /> },
                                AppRoute::Blog => html!{ <Blog /> },
                                AppRoute::Projects => html!{ <Projects /> },
                                AppRoute::PageNotFound(Permissive(None)) => html!{"Page not found"},
                                AppRoute::PageNotFound(Permissive(Some(missed_route))) => html!{format!("Page '{}' not found", missed_route)}
                            }
                        } )
                        redirect = Router::redirect(|route: Route<()>| {
                            AppRoute::PageNotFound(Permissive(Some(route.route)))
                        })
                    />
                    </div>
                    <Footer />
            </app>
        }
    }
}
