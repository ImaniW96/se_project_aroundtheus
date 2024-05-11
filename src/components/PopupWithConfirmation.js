import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupForm.querySelector(".modal__button");
  }
  setSubmitAction(callbackFn) {
    this._handleFormSubmit = callbackFn;
  }
  setEventListeners() {
    super.setEventListeners();
  }
  setSubmitButtonText(text) {
    this._submitButton.textContent = text;
  }
}
