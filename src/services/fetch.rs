use yew::format::{Json, Nothing};
use yew::services::fetch::{FetchService, FetchTask, Request, Response};
use yew::Callback;

#[derive(Default)]
pub struct Fetch {
    token: Option<String>,
    service: FetchService,
}

impl Fetch {

  pub fn github_user_data(&mut self) -> () {
    let path = "https://api.github.com/users/pecusys";
    //let request = Request::get(path).unwrap();
    //let callback = Callback::CallbackA)
    //FetchService::fetch(request, callback);
    //self.service.fetch(request)
  }

}
