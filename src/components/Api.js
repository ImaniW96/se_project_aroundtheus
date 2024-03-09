class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/get/cards", {
      headers: {
        authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  createCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/post/cards", {
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
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/delete/cards",
      {
        headers: {
          authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  dislikeCards() {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/delete/likes",
      {
        headers: {
          authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}
