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
  _handleEscapeClose(close, evt) {
    const modalOpen = document.querySelector("modal_opened");
    if (evt.keydown === "Escape") {
      close(modalOpen);
    }
  }
  setEventListeners() {
    // this._popupElement.addEventListener("click", (evt) => {
    //   evt.preventDefault();
    // });
  }
}
