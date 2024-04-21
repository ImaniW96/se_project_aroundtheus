import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    // this._deleteConfirmForm = this._popupElement.querySelector("modal__form");
    // this._deleteConfirmSubmit = this._popupElement.querySelector(
    //   "modal__deleting_save"
    // );
    // this._deleteSubmitConfirmText = this._deleteConfirmSubmit.textcontent;
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
//  deleting = (deleting, deletingText = "Deleting...") => {
//   if (deleting) {
//     this._deleteConfirmsubmit.textcontent = deletingText;
//   } else {
//     this._deleteConfirmSubmit.textcontent = this._deleteConfirmText;
//   }
// };

// saving =(saving, savingText = "Saving...") =>{
//   if (saving){
//     this._saveConfirmsubmit.textcontent = savingText;
//   } else{
//     this._saveConfirmSubmit.textcontent = this._saveConfirmText;
//   }
// }
