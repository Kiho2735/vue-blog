export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    state.userEmail = payload.email;
    state.userFirstName = payload.firstName;
    state.userLastName = payload.lastName;
    state.username = payload.username;
    state.userInitial =
      payload.firstName.match(/(\b\S)?/g).join("") +
      payload.lastName.match(/(\b\S)?/g).join("");
  },
};
