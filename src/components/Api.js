export default class Api {
  constructor({ baseUrl, headers }) {
    //
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this.checkResponse(res);
    });
  }
  createCard() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
      body: JSON.stringify({
        name: "inputValues.name",
        about: "inputValues.link",
      }),
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
      headers: this._headers,
    }).then((res) => {
      return this.checkResponse(res);
    });
  }
}
