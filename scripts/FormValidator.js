class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings._inputSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._errorClass = settings._errorClass;
    this._form = formElement;
  }
  showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
  }
  _setEventListeners() {}
  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(formEl, options);
  }
}

// _toggleButttonState();
// inputEl, submitButton, { inactiveButtonClass };
// {
// if (hasInvalidInput(inputEl)) {
//   submitButton.classList.add(inactiveButtonClass);
//   submitButton.disabled = true;
// }
// _hasInputInvalid( inputList){
// }

// _checkInputValidity(){
// (formEl, inputEl, options); {
//     if (!inputEl.validity.valid) {
//       return showInputError(formEl, inputEl, options);
//     }
//     hideInputError(formEl, inputEl, options);
//   }
//      _setEventListeners();{}
// }
export default FormValidator;
