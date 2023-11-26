class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings._inputSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._errorClass = settings._errorClass;
    this._form = formElement;
  }
  showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
  }
  _setEventListeners() {
    const { inputSelector, submitButtonSelector } = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(submitButtonSelector);

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }
  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
  checkInputValidity(formEl, inputEl, options) {
    if (!inputEl.validity.valid) {
      return showInputError(formEl, inputEl, options);
    }
    this._hideInputError(formEl, inputEl, options);
  }
  toggleButtonState(inputEl, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput(inputEl)) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
      return;
    }
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
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
