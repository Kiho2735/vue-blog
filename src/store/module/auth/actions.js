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
        responseData.message || "Failed to authenticate."
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
};
