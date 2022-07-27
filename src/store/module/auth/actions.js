export default {
  async signup(context, payload) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBtiL9-_pDJnqYMc0fb5DIMvdzPtv2_iI",
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
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      username: payload.username,
    });
  },
  async login(context, payload) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBtiL9-_pDJnqYMc0fb5DIMvdzPtv2_iI",
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

    const userInfo = await context.dispatch("getCurrentUser", {
      uid: responseData.localId,
      token: responseData.idToken,
    });

    context.commit("setUser", {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn,
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      username: userInfo.username,
    });
  },
  async reset(_, payload) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCBtiL9-_pDJnqYMc0fb5DIMvdzPtv2_iI",
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
      `https://vue-blog-87c6a-default-rtdb.firebaseio.com/users/${uid}.json`,
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
  async getCurrentUser(context, payload) {
    const uid = payload.uid;
    const token = payload.token;

    const res = await fetch(
      `https://vue-blog-87c6a-default-rtdb.firebaseio.com/users/${uid}.json?auth=${token}`
    );

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.error.message || "Failed to authenticate.");
    }

    const userInfo = Object.values(responseData)[0];

    return userInfo;
  },
  logout(context) {
    context.commit("setUser", {
      userId: null,
      token: null,
      tokenExpiration: null,
      userEmail: null,
      userFirstName: null,
      userLastName: null,
      username: null,
      userInitial: null,
    });
  },
};
