use yew_router::prelude::*;
use yew_router::switch::Permissive;

pub mod about;
pub mod home;
pub mod contact;
pub mod blog;
pub mod projects;

pub use self::{
    about::About,
    home::Home,
    contact::Contact,
    blog::Blog,
    projects::Projects,
};

/// App routes
#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/about"]
    About,
    #[to = "/contact"]
    Contact,
    #[to = "/blog"]
    Blog,
    #[to = "/projects"]
    Projects,
    #[to = "/page-not-found"]
    PageNotFound(Permissive<String>),
    #[to = "/"]
    Home,
}

