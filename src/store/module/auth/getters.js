export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  email(state) {
    return state.userEmail;
  },
  firstName(state) {
    return state.userFirstName;
  },
  lastName(state) {
    return state.userLastName;
  },
  username(state) {
    return state.username;
  },
  initial(state) {
    return state.userInitial;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  autoLogout(state) {
    return state.autoLogout;
  },
};
