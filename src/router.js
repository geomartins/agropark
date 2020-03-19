import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Faq from "./views/Faq.vue";
import Contact from "./views/Contact.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },

    {
      path: "/faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import( "./views/About.vue")
    },
    {
      path: "/our-team",
      name: "OurTeam",
      component: () =>
        import( "./views/OurTeam.vue")
    },
    {
      path: "/404",
      name: "Error",
      component: () => import("./views/Error.vue")
    },
    { path: '*', redirect: '/404'},

    
  ]
});
