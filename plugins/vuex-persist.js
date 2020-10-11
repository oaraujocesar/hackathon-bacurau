import VuexPersistence from "vuex-persist";
import localforage from "localforage";

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      reducer: state => ({ token: state.auth.token }),
      key: "user-educamind",
      storage: localforage
    }).plugin(store);
  });
};
