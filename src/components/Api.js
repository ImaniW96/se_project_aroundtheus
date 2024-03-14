export default class Api {
  constructor(options) {
    //
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "GET",
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  createCard() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  likeCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/like", {
      method: "POST",
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  deleteCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "DELETE",
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  dislikeCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/likes", {
      method: "DELETE",
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  loadUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "GET",
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
    "Content-Type": "application/json",
  },
});
