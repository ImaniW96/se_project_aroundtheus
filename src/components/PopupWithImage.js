export default class PopupWithImage {
  constructor(name, link) {}
  open(cardData) {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });

    super.open(cardData);
  }
}
// data should be an object containing the name and link
// open(data) {
//     // set the image's src and alt
//     // set the caption's textContent
//     super.open();
//   }
