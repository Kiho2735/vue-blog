import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      userEmail: null,
      userFirstName: null,
      userLastName: null,
      username: null,
      userInitial: null,
      autoLogout: false,
    };
  },
  getters,
  mutations,
  actions,
};
