pub mod nav;
pub mod footer;
pub mod code;
pub mod blog_list;
pub mod blog_post;
pub mod blog_nav;
pub mod navlink;
pub mod contact_form;

pub use self::{
    nav::Nav,
    blog_nav::BlogNav,
    blog_list::BlogList,
    blog_post::BlogPost,
    navlink::NavLink,
    footer::Footer,
    code::*,
    contact_form::ContactForm,
};

pub trait Renderable<T> {

}
