import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const input = this._popupForm.querySelectorAll("input");
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues;
      this._handleFormSubmit(inputValues);
    });
    super.setEventListeners();
  }
}
