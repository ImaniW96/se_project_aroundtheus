export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
    });
    cardDeleteButton = cardElement.querySelector(".card__trash-icon");
    cardDeleteButton.addEventListener("click", () => {
      cardElement.remove();
    });
    cardImageEl.addEventListener("click", function () {
      openPopup(previewCardModal);
      previewImageEl.setAttribute("src", cardData.link);
      previewImageEl.setAttribute("alt", cardData.name);
      previewCaptionEl.textContent = cardData.name;
    });
  }
  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button-active");
  }

  getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
  }
  getView() {
    this._element = this._getTemplate();
    this._cardElement.querySelector(".card__like-button");
    this._setEventListeners();
  }
}
