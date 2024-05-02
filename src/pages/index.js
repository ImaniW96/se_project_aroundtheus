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
  profileIcon,
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

const newCardPopup = new PopupWithForm("#profile-add-modal", (inputValues) => {
  api.createCard(inputValues).then((res) => {
    // {name: newCard, link: http:sldfsk, _id: 1234, isLiked: false }
    const cardElement = createCard(res);
    section.addItem(cardElement);
    newCardPopup.close();
    addFormValidator.resetValidation();
  });
});
const confirmDeleteModal = new PopupWithForm("#confirm-card-delete");
const changeProfilePicture = new PopupWithForm("#profile-picture-icon");

confirmDeleteModal.setEventListeners();
const changeProfile = new PopupWithForm("#profile-picture-icon", (avatar) => {
  api
    .updateProfilePicture(avatar)
    .then((res) => {
      userInformation.setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.error(err);
    });
});

const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  (inputValues) => {
    console.log(inputValues);
    // userInfo.setUserInfo(inputValues);
    editFormValidator.resetValidation();
    // setIsLoading();
    editProfilePopup.close();

    console.log(inputValues);
    api
      .editUserProfile({
        name: inputValues.name,
        about: inputValues.about,
      })

      .then(({ name, about }) => {
        userInfo.setUserInfo({ name, about });
      })
      .catch((err) => {
        console.error(err);
        alert(`${err}.Failed to update profile`);
      });
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
// const profilePictureValidator = new FormValidator(
//   config,
//   profilePictureValidation
// );
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
function handleDeleteCard() {
  this._cardDeleteButton.addEventListener("click", () => {
    this._handleDeleteCard();
  });
}
// run when you click the delete button on a card
function handleDeleteClick(card) {
  console.log(card);
  confirmDeleteModal.open();
  confirmDeleteModal.setSubmitAction(() => {
    PopupWithForm.deleting(true);
    // this arrow function runs when you submit the confirmation modal
    api
      .deleteCard(card.id)
      .then(() => {
        card.deleteCard();
        confirmDeleteModal.close();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

// EventListener
changeProfilePicture.setEventListeners();
profileIcon.addEventListener("click", () => {
  changeProfile.open();
  // profilePictureValidation.enableValidation();
});

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
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleDeleteClick,

    handleLikeClick
  );
  return card.getView();
}
function updateProfilePicture() {
  updateProfilePicture.setEventListeners();
}

editFormValidator.enableValidation();
addFormValidator.enableValidation();
// profilePictureValidator.enableValidation();
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

// get cards from server and render them on the page
let section;

api
  .getInitialCards()
  .then((cards) => {
    section = new Section(
      {
        items: cards.reverse(),
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
    alert(`${err}. Failed to add card.`);
  });

function handleLikeClick(card) {
  if (card.isLiked) {
    api
      .likeCard(card.id, card.IsLike)
      .then((res) => {
        this.setIsLiked(false);
      })
      .catch((err) => {
        console.error(err);
        alert(`${err}. Failed to dislike card`);
      });
  } else
    api
      .likeCard(card.id)
      .then((res) => {
        this.setIsLiked(true);
      })
      .catch((err) => {
        console.error(err);
        alert(`${err}. Failed to like card`);
      });
}
