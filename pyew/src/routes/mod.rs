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

use blog::{
    posts::Posts,
    blog_post::BlogPost,
    posts_by_year::PostsByYear,
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

/// Blog routes
#[derive(Switch, Debug, Clone)]
pub enum BlogRoute {
    #[to = "/blog/posts"]
    Posts,
    #[to = "/blog/{year}"]
    PostsByYear { year: u32 },
    #[to = "/blog/{year}/{slug}"]
    BlogPost {year: u32, month: u32, slug: String},
    #[to = "/blog/post-not-found"]
    PageNotFound(Permissive<String>),
    #[to = "/blog"]
    Home,
}
