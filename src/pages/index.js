import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';

import {
  popupImage,
  initialCards,
  validationElements,
  popupProfileOpenButton,
  popupProfile,
  profileField,
  nameInput,
  jobInput,
  popupCardOpenButton,
  popupCard,
  cardField,
  titleInput,
  linkInput,
  elements,
} from '../utils/utils.js'

import './index.css';

const renderCard = (data) => {
  const card = new Card(data, '#template', (name, link) => {
    imagePopup.open({
      name: name,
      link: link
    });
  });

  return card;
};

const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();

const cardSection = new Section({
  items: initialCards,
  renderer: item => {
    const card = renderCard(item);
    const cardElement = card.createCard();
    cardSection.addItem(cardElement);
  }
}, elements);

const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__job'
});

const popupFormEdit = new PopupWithForm(popupProfile, inputValues => {
  userInfo.setUserInfo(inputValues.name, inputValues.job);
  popupFormEdit.close();
});

popupFormEdit.setEventListeners();

const popupFormAdd = new PopupWithForm(popupCard, inputValues => {
  const card = renderCard(inputValues);
  const cardElement = card.createCard();
  cardSection.addItem(cardElement);
  popupFormAdd.close();
});

popupFormAdd.setEventListeners();

cardSection.renderItems();

const profileValidation = new FormValidator(validationElements, profileField);
profileValidation.enableValidation();

const cardValidation = new FormValidator(validationElements, cardField);
cardValidation.enableValidation();

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