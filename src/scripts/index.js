import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../utils/constants.js";
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
// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
//   },
// ];

// const cardData = {
//   name: "Yosemite Valley",
//   link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
// };
const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      section.addItem(cardElement);
    },
  },
  ".cards__list"
);
section.renderItems();
const newCardPopup = new PopupWithForm("#profile-add-modal", (inputValues) => {
  const cardElement = createCard(inputValues);
  // cardsList.prepend(cardElement);
  section.addItem(cardElement);
  newCardPopup.close();
  // addForm.reset();
  addFormValidator.resetValidation();
});

const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  (inputValues) => {
    userInfo.setUserInfo(inputValues);
    console.log(inputValues);
    // editForm.reset();
    editFormValidator.resetValidation();
    editProfilePopup.close();
  }
);
const editForm = document.querySelector(".modal__form");
newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
const imageCardPopup = new PopupWithImage("#preview-card-modal");
imageCardPopup.setEventListeners();

//Elements

// export const profileEditButton = document.querySelector("#profile-edit-button");
// export const profileEditModal = document.querySelector("#profile-edit-modal");
// export const addModal = document.querySelector("#profile-add-modal");
// export const previewCardModal = document.querySelector("#preview-card-modal");
// export const profileTitle = document.querySelector(".profile__title");
// export const previewImageEl = document.querySelector(".modal__image");
// export const previewCaptionEl = document.querySelector(".modal__caption");

// export const profileDescription = document.querySelector(
//   ".profile__description"
// );
// export const profileAddButton = document.querySelector(".profile__add-button");
// export const profileTitleInput = document.querySelector(
//   "#profile-edit-title-input"
// );
// export const addCardTitleInput = document.querySelector("#add-title-input");
// export const profileDescriptionInput = document.querySelector(
//   "#profile-description-input"
// );

// export const profileEditForm = profileEditModal.querySelector(".modal__form");
// export const addForm = addModal.querySelector(".modal__form");
// export const cardsList = document.querySelector(".cards__list");
// export const cardList = document.querySelector(".cards__list");
// export const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;
// export const profileEditCloseButton = document.querySelector(
//   "#edit-profile-close-button"
// );

// export const addCardCloseButton = document.querySelector(
//   "#add-card-close-button"
// );
// // export const cardTitleInput = addForm.querySelector(".modal");
// export const cardURLInput = addForm.querySelector(".modal__input_type_url");
// export const previewImageCloseModal = document.querySelector(
//   "#preview-card-image-close-button"
// );

// //Objects
// export const config = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visable",
// };
const userInfo = new UserInfo(".profile__title", ".profile__description");

const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addForm);
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

// profileEditCloseButton.addEventListener("click", () => {
//   editProfilePopup.close();
// });
addCardCloseButton.addEventListener("click", () => {
  newCardPopup.close();
});
previewImageCloseModal.addEventListener("click", () => {
  imageCardPopup.close();
});

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.getView();
  return cardElement;
}

editFormValidator.enableValidation();
addFormValidator.enableValidation();
