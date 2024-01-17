export default class PopupWithImage {
  constructor(imageSelector, caption, link, name) {
    super.open();
    this._imageSelector = previewImageEl;
    this._caption = previewCaptionEl;
    this._link = cardData;
    this._name = name;
    const newImagePopup = ImagePopup(imageSelector);
    this._cardImage = this._modal.querySelector("modal__image");
  }
}
// data should be an object containing the name and link
// open(data) {
//     // set the image's src and alt
//     // set the caption's textContent
//     super.open();
//   }
