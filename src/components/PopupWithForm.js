import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");

    this._handleFormSubmit = handleFormSubmit;
  }
  setSubmitAction(callbackFn) {
    this._handleFormSubmit = callbackFn;
  }
  _getInputValues() {
    const inputValues = {};
    const inputElements = this._popupForm.querySelectorAll(".modal__input");
    inputElements.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
  setEventListeners() {
    console.log(this._popupForm);
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
    super.setEventListeners();
  }
}
