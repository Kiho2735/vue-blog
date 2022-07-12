export default {
  async signup(context, payload) {
    const response = await fetch(
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

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.error.message || "Failed to Authenticate."
      );
      throw error;
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to authenticate.");
    }

    const data = await res.json();

    context.commit("setUser", {
      userId: data.localId,
      token: data.idToken,
      tokenExpiration: data.expiresIn,
    });
  },
  async addUser(context, payload) {
    const uid = context.getters.userId;
    
    const response = await fetch(
      `https://vue-blog-88b59-default-rtdb.firebaseio.com/users/${uid}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          firstName: payload.firstName,
          lastName: payload.lastName,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.error.message || "Failed to Authenticate."
      );
      throw error;
    }
  },
};
