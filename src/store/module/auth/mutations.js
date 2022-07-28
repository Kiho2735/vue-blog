export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.userEmail = payload.email;
    state.userFirstName = payload.firstName;
    state.userLastName = payload.lastName;
    state.username = payload.username;
    state.userInitial = payload.initial;
    state.autoLogout = false;
  },
  setAutoLogout(state) {
    state.autoLogout = true;
  },
};
