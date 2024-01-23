export default class Userinfo {
  constructor(profileTitle, profileDesription) {
    this._name = profileTitle;
    this._description = profileDesription;
  }
  getUserInfo() {
    return this._name, this._description;
  }

  setUserInfo(title, description) {
    this._profiletitleElement.textContent = title;
    this._profileDescriptionElement.textContent = description;
  }
  setEventListeners() {
    this._popupForm.addEventListeners("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
}
