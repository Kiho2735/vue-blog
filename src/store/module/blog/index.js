import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      blogList: [
        {
          title: "First Blog",
          previewImage: "preview1",
          date: new Date().toLocaleDateString(),
        },
        {
          title: "Second Blog",
          previewImage: "preview2",
          date: new Date().toLocaleDateString(),
        },
        {
          title: "Third Blog",
          previewImage: "preview3",
          date: new Date().toLocaleDateString(),
        },
        {
          title: "Fourth Blog",
          previewImage: "preview4",
          date: new Date().toLocaleDateString(),
        },
      ],
    };
  },
  getters,
  actions,
  mutations,
};
