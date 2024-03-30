export default class Api {
  constructor({ baseUrl, headers }) {
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
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: this._name,
        about: this._link,
      }),
    }).then((res) => {
      return this.checkResponse(res);
    });
  }
  editUserProfile(res) {
    console.log(res);
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: res.name,
        about: res.about,
      }),
    }).then((res) => {
      return this.checkResponse(res);
    });
  }

  likeCards() {
    return fetch(`${this._baseUrl}/likes`, {
      method: "POST",
      headers: this._headers,
    }).then((res) => {
      return this.checkResponse(res);
    });
  }
  deleteCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this.checkResponse(res);
    });
  }
  dislikeCards() {
    return fetch(`${this._baseUrl}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this.checkResponse(res);
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
