export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }

  setUserInfo(inputValues) {
    this._name.textContent = inputValues.name;
    this._about.textContent = inputValues.about;
  }
  setUserAvatar(inputValues) {
    this._avatar.src = inputValues.avatar;
  }
}
