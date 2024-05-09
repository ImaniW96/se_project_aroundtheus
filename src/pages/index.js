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
  profilePictureForm,
  cardsList,
  cardList,
  cardTemplate,
  profileEditCloseButton,
  addCardCloseButton,
  cardURLInput,
  previewImageCloseModal,
  config,
} from "../utils/constants.js";

const handleAddCardSubmit = (inputValues) => {
  api.createCard(inputValues).then((res) => {
    const cardElement = createCard(res);
    section.addItem(cardElement);
    newCardPopup.close();
    addFormValidator.resetValidation();
  });
};
const newCardPopup = new PopupWithForm("#profile-add-modal", (inputValues) => {
  newCardPopup.setSubmitButtonText("Saving....");
  api
    .createCard(inputValues)
    .then((res) => {
      const cardElement = createCard(res);
      section.addItem(cardElement);
      newCardPopup.close();
      addFormValidator.resetValidation();
    })
    .finally(() => {
      newCardPopup.setSubmitButtonText("Save");
    });
});
const confirmDeleteModal = new PopupWithForm(
  "#confirm-card-delete",
  (inputValues) => {
    confirmDeleteModal.setSubmitButtonText("Deleting....");
    api
      .deleteCard(card.id)
      .then(() => {
        card.deleteCard();
        confirmDeleteModal.close();
        renderItems();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        confirmDeleteModal.setSubmitButtonText("Delete");
      });
  }
);
const changeProfilePicture = new PopupWithForm(
  "#profile-picture-icon",
  (inputValues) => {
    changeProfilePicture.setSubmitButtonText("Saving....");
    api
      .updateProfilePicture(inputValues)
      .then((res) => {
        userInfo.setUserAvatar(res);
        changeProfilePicture.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        changeProfilePicture.setSubmitButtonText("Save");
      });
  }
);

confirmDeleteModal.setEventListeners();

const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  (inputValues) => {
    console.log(inputValues);

    editFormValidator.resetValidation();

    editProfilePopup.close();

    console.log(inputValues);
    editProfilePopup.setSubmitButtonText("Saving....");
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
      })
      .finally(() => {
        editProfilePopup.setSubmitButtonText("Save");
      });
  }
);

const editForm = document.querySelector(".modal__form");
newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
const imageCardPopup = new PopupWithImage("#preview-card-modal");
imageCardPopup.setEventListeners();

//Elements

const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addForm);
const profilePictureValidator = new FormValidator(config, profilePictureForm);

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
    confirmDeleteModal.setSubmitButtonText("Deleting....");
    // this arrow function runs when you submit the confirmation modal
    api
      .deleteCard(card.id)
      .then(() => {
        card.deleteCard();
        confirmDeleteModal.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        confirmDeleteModal.setSubmitButtonText("Delete");
      });
  });
}

// EventListener
changeProfilePicture.setEventListeners();
profileIcon.addEventListener("click", () => {
  changeProfilePicture.open();
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
profilePictureValidator.enableValidation();
//get user info from server and set it locally on the page
api
  .loadUserInfo()
  .then((info) => {
    userInfo.setUserInfo(info);
    userInfo.setUserAvatar(info);
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
  api
    .likeCard(card.id, card.isLiked)
    .then((res) => {
      card.setIsLiked();
    })
    .catch((err) => {
      console.error(err);
      alert(`${err}. Failed to like or dislike card`);
    });
}
