export default {
  async signup(context, payload) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzZopymZAm05oRuxNc2Jyg84MiPRHmooM",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.error.message || "Failed to Authenticate.");
    }

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async login(context, payload) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzZopymZAm05oRuxNc2Jyg84MiPRHmooM",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.error.message || "Failed to authenticate.");
    }

    context.commit("setUser", {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async reset(_, payload) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDzZopymZAm05oRuxNc2Jyg84MiPRHmooM",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          requestType: "PASSWORD_RESET",
        }),
      }
    );

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.error.message || "Failed to authenticate.");
    }
  },
  async addUser(context, payload) {
    const uid = context.getters.userId;

    const res = await fetch(
      `https://vue-blog-88b59-default-rtdb.firebaseio.com/users/${uid}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          username: payload.username,
          firstName: payload.firstName,
          lastName: payload.lastName,
        }),
      }
    );

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.error.message || "Failed to Authenticate.");
    }
  },
};
