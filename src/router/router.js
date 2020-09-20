import vue from "vue";
import Router from "vue-router";
const index = () => import("../components/index.vue");
const publish = () => import("../components/publish.vue");
const edit = () => import("../components/edit.vue");
const person = () => import("../components/person");
const event = () => import("../components/event/event");
const eventlist = () => import("../components/event/eventlist");
const research = () => import("../components/research");
const contact = () => import("../components/contact");
const links = () => import("../components/link");
const login = () => import("../components/login");
vue.use(Router);
const router = new Router({
  //mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "index" },
    },
    {
      path: "/index",
      name: "index",
      meta: {
        title: "Liu Lab",
      },
      component: index,
    },
    {
      path: "/publish",
      name: "publish",
      component: publish,
    },
    {
      path: "/edit",
      name: "edit",
      component: edit,
    },
    {
      path: "/person",
      name: "person",
      component: person,
    },
    {
      path: "/event",
      name: "event",
      component: event,
    },
    {
      path: "/eventlist",
      name: "eventlist",
      component: eventlist,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/research",
      name: "research",
      component: research,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "/links",
      name: "links",
      component: links,
    },
  ],
});

/*export default {
  router
};*/
export default router;
