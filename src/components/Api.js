class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
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
    //
  }
  likeCards() {
    //
  }
  deleteCards() {
    //
  }
  dislikeCards() {
    //
  }
}
