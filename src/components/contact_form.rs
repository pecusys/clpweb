use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::AppRoute;

/// ContactForm component
#[derive(Default)]
pub struct ContactForm {
    name: String,
    email: String,
    text_data: String,
    submitted: bool,
}

pub enum Msg {
    UpdateName(String),
    UpdateEmail(String),
    UpdateText(String),
    SendContactForm,
    Ignore,
    Nope,
}

impl Component for ContactForm {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        ContactForm::default()
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        true
        //ContactForm {
            //name: &self.name,
            //email: &self.email,
            //text_data: &self.text_data,
            //submitted: &self.submitted,
        //}
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::UpdateName(name) => {
                self.name=name;
            }
            Msg::UpdateEmail(email) => {
                self.email=email;
            }
            Msg::UpdateText(text) => {
                self.text_data=text;
            }
            Msg::SendContactForm => {
                self.submitted=true;
            }
            Msg::Ignore => {
                return false;
            }
            Msg::Nope => {}
        }
        true
    }

        fn view(&self) -> Html {
            html! {
                <contactform>
                    <form>
                        <fieldset>
                            <legend><h3>{"Contact me!"}</h3></legend>
                            <div>
                                <p>{ "Your name: " }</p>
                                <input class="name"
                                       placeholder="Your name"
                                       value=&self.name/>
                            </div>
                            <div>
                                <p>{ "Your email: " }</p>
                                <input class="name"
                                       placeholder="Your email"
                                       value=&self.email/>
                            </div>
                            <div>
                                <p>{ "Your feedback: " }</p>
                                <input class="feedback"
                                       type="text-box"
                                       placeholder="Your comments/feedback/queries"
                                       value=self.text_data/>
                            </div>
                            <br/><br/>
                            <button
                                    type="submit"
                                    disabled=self.submitted>
                                    {" Submit" }
                            </button>
                        </fieldset>
                    </form>
                </contactform>
            }
        }
    }
