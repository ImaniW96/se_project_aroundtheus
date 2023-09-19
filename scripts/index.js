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
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
];
console.log(initialCards);

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".card-title");

function closePopop() {
  profileEditModal.classList.remove("modal__opened");
}
function getCardElement(cardData) {}
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal__opened");
});

const profileExitModal = document.querySelector("#close-button");

profileExitModal.addEventListener("click", () => {
  profileEditModal.classList.remove("modal__opened");
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopop();
});

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

initialCards.forEach((cardData) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card-image");
  const cardTitleEl = cardElement.querySelector(".card-title");
  return cardElement;
  //const cardElement = getCardElement(cardData);
  //cardListEl.prepend(cardElement);
});

// for (let i = 0; i < initialCards.length; i++) {
// const card = initialCards[i];
// const cardElement = getCardElement(card);
// CardElement.append(cardElement);
// }
// function getCardElement(data) {
// const cardElement = cardElement.cloneNode(true);
// const Title = cardElement.querySelector(".card__title");
// const Image = cardElement.querySelector(".card__image");
// cardImage.setAttribute("src", data.link);
// cardImage.setAttribute("alt", data.name);
// cardTitle.textContent = data.name;
// return cardElement;
// }
// initialCards.forEach((data) => {
// const getCardElement = getCardElement(data);
// cardElement.append(cardElement);
// });
