export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
  }
  _handleEscapeClose(evt) {
    this._popupElement.add("modal_opened");
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    // document.addEventListener("keydown", this._handleEscapeClose.bind(this));
    // this._popupElement.addEventListener("click", (evt) => {
    //   evt.preventDefault();
    // });
  }
  addEscapeEventListeners() {
    document.addEventListener("keydown", this._handleEscapeClose.bind(this));
  }
}
