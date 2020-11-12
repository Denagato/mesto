import { Card } from './Card.js'
import { FormValidator }  from './FormValidator.js'
import {
  popupImage,
  openPopup,
  closePopup,
  initialCards
} from './utils.js'

const popupProfileOpenButton = document.querySelector('.profile__info-button');
const popupProfileCloseButton = document.querySelector('.popup__close_profile');
const popupProfile = document.querySelector('.popup_profile');
const profileField = document.querySelector('.popup__field_profile');
const nameInput = document.querySelector('.popup__field-name');
const jobInput = document.querySelector('.popup__field-job')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileSubmitButton = document.querySelector('.popup__submit-button_profile');

const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCardCloseButton = document.querySelector('.popup__close_card');
const popupCard = document.querySelector('.popup_add-card');
const cardField = document.querySelector('.popup__field_card');
const titleInput = document.querySelector('.popup__field-title');
const linkInput = document.querySelector('.popup__field-link');
const elements = document.querySelector('.elements__table');
const cardSubmitButton = document.querySelector('.popup__submit-button_card');
const popupImageCloseButton = document.querySelector('.popup__close-image');

function addCard(event) {
  event.preventDefault();
  
  const data = {};
  data.name = titleInput.value;
  data.link = linkInput.value;

  renderCard(data);
  closePopup(popupCard);
};

const renderCard = (data) => {
  const cards = new Card(data, '#template');
  const elementCard = cards.createCard();

  elements.prepend(elementCard);
};

initialCards.forEach((item) => {
  renderCard(item);
});

function popupProfileEdit() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileCloseButton);
}

const validationElements = {
  formSelector: '.popup__field',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'error'
};

const profileValidation = new FormValidator(validationElements, profileField);
profileValidation.enableValidation();

const cardValidation = new FormValidator(validationElements, cardField);
cardValidation.enableValidation();

profileField.addEventListener('submit', formSubmitHandler);
cardField.addEventListener('submit', addCard);
popupProfileOpenButton.addEventListener('click', popupProfileEdit);
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
profileSubmitButton.addEventListener('click', () => closePopup(popupProfile));
popupCardOpenButton.addEventListener('click', () => {
  titleInput.value = '';
  linkInput.value = '';
  cardSubmitButton.classList.add('popup__submit-button_invalid');
  cardSubmitButton.setAttribute('disabled', 'true');
  openPopup(popupCard)
});
popupCardCloseButton.addEventListener('click', () => closePopup(popupCard));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));