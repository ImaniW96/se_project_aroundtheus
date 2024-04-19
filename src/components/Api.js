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

  createCard(inputValues) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(inputValues),
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

  likeCards(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then((res) => {
      return this.checkResponse(res);
    });
  }
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
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
