import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const input = this._popupForm.querySelectorAll("input");
  }
  close() {
    this.popupForm.reset();
  }
}
