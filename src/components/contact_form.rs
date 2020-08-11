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
                        <div class="info-box-or">
                            <legend><h3>{"Contact me!"}</h3></legend>
                            <p>{ " Send me some advice, or reach out to me" }</p>
                            <div>
                                <p>{ "Your name: " }</p>
                                <input class="name"
                                    placeholder="Name"
                                    value=&self.name/>
                            </div>
                            <div>
                                <p>{ "Your email: " }</p>
                                <input class="name"
                                    type="email"
                                    placeholder="Email"
                                    value=&self.email/>
                            </div>
                            <div>
                                <p>{ "Your feedback: " }</p>
                                <textarea class="feedback"
                                    rows="4"
                                    cols="32"
                                    placeholder="Your comments/feedback/queries"
                                    value=self.text_data/>
                            </div>
                            <br/><br/>
                            <button
                                    type="submit"
                                    class="filled"
                                    disabled=self.submitted>
                                    {" Submit" }
                            </button>
                        </div>
                    </form>
                </contactform>
            }
        }
    }
