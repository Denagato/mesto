import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Api from '../components/Api.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from "../components/PopupDeleteCard.js";
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';

import {
  popupImage,
  validationElements,
  popupProfileOpenButton,
  popupProfile,
  profileField,
  nameInput,
  jobInput,
  popupCardOpenButton,
  popupCard,
  popupAvatarOpenButton,
  popupAvatar,
  popupDelete,
  avatarField,
  cardField,
  titleInput,
  linkInput,
  elements,
  apiConfig
} from '../utils/utils.js'

import './index.css';

const api = new Api(apiConfig);

const renderCard = (data, userData) => {
  return new Card(data, api, userData, {
    templateSelector: '#template',
    handleCardClick: (name, link) => {
      imagePopup.open({
        name: name,
        link: link
      })
    },
    handleCardDelete: (data) => {
      deletePopup.open(api, data);
    }
  });
};

const deletePopup = new PopupDeleteCard(popupDelete);
deletePopup.setEventListeners();

const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();

const cardSection = new Section({
  renderer: (item) => {
    const card = renderCard(item, userApi);
    const cardElement = card.createCard();
    cardSection.addItem(cardElement);
      },
}, elements);

let userApi;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userApi = userData;
    userInfo.setUserAvatar(userData);
    userInfo.setUserInfo(userData);
    cardSection.renderItems(cards)
  })
  .catch((err) => console.log(`Что-то пошло не так: ${err}`));

const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__job',
  userAvatarSelector: '.profile__avatar'
});

const popupFormEdit = new PopupWithForm(popupProfile, inputValues => {
  popupFormEdit.renderLoading(true);
  api.updateUserInfo(inputValues)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupFormEdit.close();
    })
    .catch((err) => console.log(`Что-то пошло не так: ${err}`))
    .finally(() => {
      popupFormEdit.renderLoading(false);
    });
});

popupFormEdit.setEventListeners();

const popupFormAdd = new PopupWithForm(popupCard, inputValues => {
  popupFormAdd.renderLoading(true);
  api.addNewCard(inputValues)
    .then((cards) => {
      api.getUserInfo()
        .then((data) => {
          const card = renderCard(cards, data);
          const cardElement = card.createCard();
          cardSection.addItem(cardElement);
        })
        .catch((err) => console.log(`Что-то пошло не так: ${err}`));
      popupFormAdd.close();
    })
    .catch((err) => console.log(`Что-то пошло не так: ${err}`))
    .finally(() => {
      popupFormAdd.renderLoading(false);
    });
});

popupFormAdd.setEventListeners();

const popupAvatarEdit = new PopupWithForm(popupAvatar, inputValues => {
  popupAvatarEdit.renderLoading(true);
  api.updateUserAvatar(inputValues.avatar)
    .then((data) => {
      userInfo.setUserAvatar(data);
      popupAvatarEdit.close();
    })
    .catch((err) => console.log(`Что-то пошло не так: ${err}`))
    .finally(() => {
      popupAvatarEdit.renderLoading(false);
    });
})

popupAvatarEdit.setEventListeners();

const profileValidation = new FormValidator(validationElements, profileField);
profileValidation.enableValidation();

const cardValidation = new FormValidator(validationElements, cardField);
cardValidation.enableValidation();

const avatarValidation = new FormValidator(validationElements, avatarField);
avatarValidation.enableValidation();

popupProfileOpenButton.addEventListener('click', () => {
  const newUserInfo = userInfo.getUserInfo();
  nameInput.value = newUserInfo.userName;
  jobInput.value = newUserInfo.userInfo;
  profileValidation.disableButton();
  popupFormEdit.open();
});

popupCardOpenButton.addEventListener('click', () => {
  titleInput.value = '';
  linkInput.value = '';
  cardValidation.disableButton();
  popupFormAdd.open();
});

popupAvatarOpenButton.addEventListener('click', () => {
  avatarValidation.disableButton();
  popupAvatarEdit.open();
});