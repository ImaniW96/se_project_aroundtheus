class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    function openPopup(modal) {
      document.addEventListener("keydown", closeModalByEscape);
      openPopup();
    }
  }
  close() {}
  _handleEscapeClose() {
    function closeModalByEscape(event) {
      if (event.key === "Escape") {
        const modalOpened = document.querySelector(".modal_opened");
        if (modalOpened) {
          closePopup(modalOpened);
        }
      }
    }
  }
  setEventListeners() {}
}
