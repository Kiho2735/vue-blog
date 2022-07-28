let timer;

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

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("email", payload.email);
    localStorage.setItem("firstName", payload.firstName);
    localStorage.setItem("lastName", payload.lastName);
    localStorage.setItem("username", payload.username);

    const initial =
      payload.firstName.match(/(\b\S)?/g).join("") +
      payload.lastName.match(/(\b\S)?/g).join("");

    localStorage.setItem("userInitial", initial);

    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("expiresIn", expirationDate);

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      username: payload.username,
      initial: initial,
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

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("email", userInfo.email);
    localStorage.setItem("firstName", userInfo.firstName);
    localStorage.setItem("lastName", userInfo.lastName);
    localStorage.setItem("username", userInfo.username);

    const initial =
      userInfo.firstName.match(/(\b\S)?/g).join("") +
      userInfo.lastName.match(/(\b\S)?/g).join("");

    localStorage.setItem("userInitial", initial);

    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("expiresIn", expirationDate);

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      userId: responseData.localId,
      token: responseData.idToken,
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      username: userInfo.username,
      initial: initial,
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");
    const expiresIn = localStorage.getItem("expiresIn");

    const newExpiresIn = +expiresIn - new Date().getTime();

    if (newExpiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, newExpiresIn);

    if (token && id) {
      context.commit("setUser", {
        userId: id,
        token: token,
        email: localStorage.getItem("email"),
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        username: localStorage.getItem("username"),
        initial: localStorage.getItem("userInitial"),
      });
    }
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
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("username");
    localStorage.removeItem("userInitial");

    localStorage.removeItem("expiresIn");

    clearTimeout(timer);

    context.commit("setUser", {
      userId: null,
      token: null,
      userEmail: null,
      userFirstName: null,
      userLastName: null,
      username: null,
      userInitial: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
