import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      userEmail: null,
      userFirstName: null,
      userLastName: null,
      username: null,
      userInitial: null,
    };
  },
  getters,
  mutations,
  actions,
};
