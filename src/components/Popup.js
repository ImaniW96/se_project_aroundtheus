export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".modal__close");
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }
  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupCloseButton|| evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}
