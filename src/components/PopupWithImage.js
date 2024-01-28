import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }
  open(cardData) {
    const popupImage = this._popupElement.querySelector(".modal__image");
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    const popupCaption = this._popupElement.querySelector(".modal__caption");
    popupCaption.textContent = cardData.name;
    super.open(cardData);
  }
}
// data should be an object containing the name and link
// open(data) {
//     // set the image's src and alt
//     // set the caption's textContent
//     super.open();
//   }
