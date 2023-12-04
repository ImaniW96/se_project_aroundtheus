import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
const initialCards = [
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
const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};
//Elements

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addModal = document.querySelector("#profile-add-modal");
const previewCardModal = document.querySelector("#preview-card-modal");
const profileTitle = document.querySelector(".profile__title");
const previewImageEl = document.querySelector(".modal__image");
const previewCaptionEl = document.querySelector(".modal__caption");

const profileDescription = document.querySelector(".profile__description");
const profileAddButton = document.querySelector(".profile__add-button");
const profileTitleInput = document.querySelector("#profile-edit-title-input");
const addCardTitleInput = document.querySelector("#add-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const profileEditForm = profileEditModal.querySelector(".modal__form");
const addForm = addModal.querySelector(".modal__form");
const cardsList = document.querySelector(".cards__list");
const cardList = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const profileEditCloseButton = document.querySelector(
  "#edit-profile-close-button"
);

const addCardCloseButton = document.querySelector("#add-card-close-button");
const cardTitleInput = addForm.querySelector(".modal");
const cardURLInput = addForm.querySelector(".modal__input_type_url");
const previewImageCloseModal = document.querySelector(
  "#preview-card-image-close-button"
);

//Objects
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visable",
};

const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addForm);
//Functions

function closePopup(modal) {
  document.removeEventListener("keydown", closeModalByEscape);
  modal.classList.remove("modal_opened");
}

function openPopup(modal) {
  document.addEventListener("keydown", closeModalByEscape);
  modal.classList.add("modal_opened");
}
function closeModalByEscape(event) {
  if (event.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    if (modalOpened) {
      closePopup(modalOpened);
    }
  }
}
function handleImageClick(cardData) {
  openPopup(previewCardModal);
  previewImageEl.setAttribute("src", cardData.link);
  previewImageEl.setAttribute("alt", cardData.name);
  previewCaptionEl.textContent = cardData.name;
}

// EventListener

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});
profileAddButton.addEventListener("mousedown", () => {
  openPopup(addModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});
addCardCloseButton.addEventListener("click", () => {
  closePopup(addModal);
});
previewImageCloseModal.addEventListener("click", () => {
  closePopup(previewCardModal);
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardData = { name: addCardTitleInput.value, link: cardURLInput.value };
  const card = new Card(cardData, "#card-template", handleImageClick);
  cardsList.prepend(card.getView());
  closePopup(addModal);
  addForm.reset(".modal__button_disabled");
});

const modals = [...document.querySelectorAll(".modal")];
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (event) => {
    if (event.target === event.currentTarget) {
      closePopup(event.currentTarget);
    }
  });
});

// ititialization
initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#card-template", handleImageClick);

  const cardElement = card.getView();
  console.log(cardElement);
  cardsList.prepend(cardElement);
});

editFormValidator.enableValidation();
addFormValidator.enableValidation();
