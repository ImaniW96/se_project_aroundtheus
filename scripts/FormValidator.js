class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings; //config  this._settings.formSelector
    this._form = formElement;
    this._inputErrorClass = settings._inputErrorClass;
    this._submitButton = this._form.querySelector(
      this._settings.submitButtonSelector
    );
    this._inputEls = [
      ...this._form.querySelectorAll(this._settings.inputSelector),
    ];
  }
  _showInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._settings.inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._settings.errorClass);
  }
  _setEventListeners() {
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState(inputEl);
      });
    });
  }
  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError(inputEl);
    }
    this._hideInputError(inputEl);
  }
  _toggleButtonState(inputEl) {
    if (this._hasInvalidInput(inputEl)) {
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
      this._submitButton.disabled = true;
      return;
    }
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    this._submitButton.disabled = false;
  }
  _hideInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._settings.inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._settings.errorClass);
  }
  _hasInvalidInput() {
    return !this._inputEls.every((inputEl) => inputEl.validity.valid);
  }
  // enableValidation(options) {
  //   const formEl = [...document.querySelectorAll(options.formSelector)];
  //   formEl.forEach(() => {
  //     formEl.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //     });
  //     setEventListeners(formEl, options);
  //   });
  // }
}

// this._hasInputInvalid( inputList){
// }

// this._checkInputValidity(){
// (formEl, inputEl, options); {
//  if (!inputEl.validity.valid) {
// return showInputError(formEl, inputEl, options);
//     }
//   this._hideInputError(formEl, inputEl, options);
//   }
//  this._setEventListeners();{}
// }

export default FormValidator;
