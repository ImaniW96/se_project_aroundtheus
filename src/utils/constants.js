export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const addModal = document.querySelector("#profile-add-modal");
export const profilePictureModal = document.querySelector(
  "#profile-picture-icon"
);
export const previewCardModal = document.querySelector("#preview-card-modal");
export const profileTitle = document.querySelector(".profile__title");
export const previewImageEl = document.querySelector(".modal__image");
export const previewCaptionEl = document.querySelector(".modal__caption");
export const profileIcon = document.querySelector("#profile-icon");

export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileAddButton = document.querySelector(".profile__add-button");
export const profileTitleInput = document.querySelector(
  "#profile-edit-title-input"
);
export const addCardTitleInput = document.querySelector("#add-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const addForm = addModal.querySelector(".modal__form");
export const profilePictureForm =
  profilePictureForm.querySelector(".modal__form");
export const cardsList = document.querySelector(".cards__list");
export const cardList = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const profileEditCloseButton = document.querySelector(
  "#edit-profile-close-button"
);

export const addCardCloseButton = document.querySelector(
  "#add-card-close-button"
);
export const cardURLInput = addForm.querySelector(".modal__input_type_url");
export const profileURLInput = addForm.querySelector(".modal__input_type_url");
export const previewImageCloseModal = document.querySelector(
  "#preview-card-image-close-button"
);

//Objects
export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visable",
};
export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];
