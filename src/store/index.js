import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "张三",
    age: 25,
  },
  mutations: {
    addage(state, value) {
      state.age = value;
    },
  },
  getters() {},
  actions: {
    asyncAdd(context) {
      setTimeout(() => {
        context.commit("addage");
      }, 1000);
    },
  },
  modules: {},
});
