export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
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
