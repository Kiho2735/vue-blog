export default {
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
