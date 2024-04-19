export default class Card {
  constructor(cardData, cardSelector, handleImageClick, handleDeleteClick) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this.id = cardData.id;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteCard(this);
    });
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this._cardData);
    });
    // this._handleDeleteCard
    //   .querySelector(".confirm-card-delete")
    //   .addEventListener("click", () => this._handleDeleteClick(this));
  }
  deletecard() {
    this._handleDeleteCard.remove();
    this._handleDeleteCard = null;
  }
  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
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
