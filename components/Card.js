export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("card__like-button_active");
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._cardElement.remove();
    });
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this._cardData);
    });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _handleLikeIcon() {
    this._cardElement(".card__like-button").classList.toggle(
      "card__like-button-active"
    );
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return this._cardElement;
  }
  getView() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".card__like-button");
    this._cardDeleteButton = this._element.querySelector(".card__trash-icon");
    this._cardImageEl = this._element.querySelector(".card__image");
    this._cardTitleEl = this._element.querySelector(".card__title");
    this._cardImageEl.setAttribute("src", this._link);
    this._cardImageEl.setAttribute("alt", this._name);
    this._cardTitleEl.textContent = this._name;

    this._setEventListeners();
    return this._cardElement;
  }
}
