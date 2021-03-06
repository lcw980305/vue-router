import Vue from "vue";
import VueRouter from "vue-router";
import Find from "../views/Find.vue";
import My from "../views/My.vue";
import Part from "../views/Part.vue";
import Notfound from "../views/NotFound";
import Recommend from "../views/Second/Recommend";
import Ranking from "../views/Second/Ranking";
import SongList from "../views/Second/SongList";
import login from "../views/login";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/login", component: login },
  { path: "/", redirect: "login" },
  {
    path: "/index",
    component: index,
    redirect: "find",
    children: [
      {
        path: "/find",
        component: Find,
        children: [
          { path: "/", redirect: "recommend" },
          { path: "recommend", component: Recommend },
          { path: "ranking", component: Ranking },
          { path: "songlist", component: SongList },
        ],
      },
      { path: "/my", component: My },
      { path: "/part", component: Part },
      { path: "/part/:username", component: Part },
    ],
  },

  { path: "*", component: Notfound },
];

const router = new VueRouter({
  routes,
});

export default router;
