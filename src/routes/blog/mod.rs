pub mod home;
pub mod blog_post;
pub mod posts;
pub mod posts_by_year;
pub mod posts_by_month;

use yew::prelude::*;
use yew_router::prelude::*;
use yew_router::switch::Permissive;

pub use home::BlogHome;
pub use crate::routes::{BlogRoute, AppRoute};
pub use crate::components::BlogNav;
pub use posts::Posts;
pub use posts_by_year::PostsByYear;
pub use posts_by_month::PostsByMonth;
pub use blog_post::BlogPost;

pub struct Blog;

impl Component for Blog {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Blog {}
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html {
        html! {
            <blog>
            <div class="content blog">
                <BlogNav />
                <BlogHome/>
            </div>
            </blog>
        }
    }
}
