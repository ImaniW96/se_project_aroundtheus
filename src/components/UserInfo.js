export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._nameElements = document.querySelectorAll(nameSelector);
    this._aboutElements = document.querySelectorAll(aboutSelector);
  }
  getUserInfo() {
    return {
      name: this._nameElements.textContent,
      about: this._aboutElements.textContent,
    };
  }

  setUserInfo(name, about) {
    this._name.textContent = name;
    this._about.textContent = about;
    // this._nameSelector = document.querySelector(".profile__title");
    // this._aboutSelector = document.querySelector(".profile__description");
  }
  //   setUserInfo(name, about) {
  //     this._nameElements.forEach((element) => {
  //       element.textContent = name;
  //     });

  //     this._aboutElements.forEach((element) => {
  //       element.textContent = about;
  //     });
  //   }
}
