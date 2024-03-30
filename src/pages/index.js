import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../utils/constants.js";
import Api from "../components/Api.js";
import {
  profileEditButton,
  profileEditModal,
  addModal,
  previewCardModal,
  profileTitle,
  previewImageEl,
  previewCaptionEl,
  profileDescription,
  profileAddButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addForm,
  cardsList,
  cardList,
  cardTemplate,
  profileEditCloseButton,
  addCardCloseButton,
  cardURLInput,
  previewImageCloseModal,
  config,
} from "../utils/constants.js";

// const section = new Section(
//   {
//     items: initialCards,
//     renderer: (cardData) => {
//       const cardElement = createCard(cardData);
//       section.addItem(cardElement);
//     },
//   },
//   ".cards__list"
// );
// section.renderItems();

// const newCardPopup = new PopupWithForm("#profile-add-modal", (inputValues) => {
//   api.createCard(name, link);

//   const cardElement = createCard(inputValues);
//   section.addItem(cardElement);
//   newCardPopup.close();
//   addFormValidator.resetValidation();
// });
const newCardPopup = new PopupWithForm("#profile-add-modal", (inputValues) => {
  api.createCard(inputValues).then((res) => {
    const cardElement = createCard(inputValues);
    section.addItem(cardElement);
    newCardPopup.close();
    addFormValidator.resetValidation();
  });
});

const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  (inputValues) => {
    userInfo.setUserInfo(inputValues);
    console.log(inputValues);
    editFormValidator.resetValidation();
    editProfilePopup.close();
    api.editUserProfile();
  }
);
const editForm = document.querySelector(".modal__form");
newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
const imageCardPopup = new PopupWithImage("#preview-card-modal");
imageCardPopup.setEventListeners();

//Elements

const userInfo = new UserInfo(".profile__title", ".profile__description");

const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addForm);
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "e3f5bc64-c279-4474-9c65-8c5ae0831eb9",
    "Content-Type": "application/json",
  },
});
//Functions

function handleImageClick(cardData) {
  imageCardPopup.open(cardData);
}

// EventListener

profileEditButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  profileTitleInput.value = name;
  profileDescriptionInput.value = about;
  editFormValidator.resetValidation();
  editProfilePopup.open();
});
profileAddButton.addEventListener("click", () => {
  newCardPopup.open();
});

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.getView();

  return cardElement;
}

editFormValidator.enableValidation();
addFormValidator.enableValidation();
//get user info from server and set it locally on the page
api
  .loadUserInfo()
  .then((info) => {
    userInfo.setUserInfo(info);
  })
  .catch((err) => {
    console.error(err);
    alert(`${err}. Failed to get user info.`);
  });

//get cards from server and render them on the page
api
  .getInitialCards()
  .then((card) => {
    const section = new Section(
      {
        items: card,
        renderer: (cardData) => {
          const cardElement = createCard(cardData);
          section.addItem(cardElement);
        },
      },
      ".cards__list"
    );
    section.renderItems();
  })
  .catch((err) => {
    console.error(err);
    alert(`${err}. Failed to load cards.`);
  });

api
  .editUserProfile({
    name: res.name,
    about: res.description,
  })
  .then((res) => {
    userInfo.setUserInfo({ name: res.name, about: res.description });
    api.getUserInfo(userInfo._name, userInfo._about);
  })
  .catch((err) => {
    console.error(err);
    alert(`${err}.Failed to update profile`);
  });
