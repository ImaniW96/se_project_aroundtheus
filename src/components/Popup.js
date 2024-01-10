class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    function openPopup(modal) {
      document.addEventListener("keydown", closeModalByEscape);
      modal.classList.add("modal_opened");
    }
  }
  close() {
    function closeModalByEscape(event) {
      if (event.key === "Escape") {
        const modalOpened = document.querySelector(".modal_opened");
        if (modalOpened) {
          closePopup(modalOpened);
        }
      }
    }
  }
  _handleEscapeClose() {}
  setEventListeners() {}
}
