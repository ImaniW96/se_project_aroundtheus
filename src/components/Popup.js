class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.classList.add("modal_opened");
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
  }
  _handleEscapeClose(close, evt) {
    const modalOpen = document.querySelector("modal_opened");
    if (evt.key === "Escape") {
      close(modalOpen);
    }
  }
  setEventListeners() {
    this._popupElement.addEventListeners("click", (evt) => {
      evt.preventDefault();
    });
  }
}
