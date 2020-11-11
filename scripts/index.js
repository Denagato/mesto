import { Card } from './Card.js'
import { FormValidator }  from './FormValidator.js'

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

export const popupImage = document.querySelector('.popup_image-open');
const popupImageCloseButton = document.querySelector('.popup__close-image');
export const popupImageLink = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__image-title');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export function popupOpen(popup) {
  popup.classList.add('popup_opened');
  addListener(popup);
}

export function popupClose(popup) {
  popup.classList.remove('popup_opened');
  removeListener(popup);
}

function popupCardEdit() {
  popupOpen(popupCard);
}

function popupCardClose() {
  popupClose(popupCardCloseButton);
}

function closeByEsc (event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    popupClose(popup);
  }
}

function closeByOverlay(event) {
  if (event.target.classList.contains('popup_opened')) {
    popupClose(event.target);
  }
}

function addListener(item) {
  item.addEventListener('mousedown', closeByOverlay);
  document.addEventListener('keydown', closeByEsc);
}

function removeListener(item) {
  item.removeEventListener('mousedown', closeByOverlay);
  document.removeEventListener('keydown', closeByEsc);
}

function addCard(event) {
  event.preventDefault();
  
  const data = {};
  data.name = titleInput.value;
  data.link = linkInput.value;

  renderCard(data);
  popupClose(popupCard);
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
  popupOpen(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(popupProfileCloseButton);
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
popupProfileCloseButton.addEventListener('click', () => popupClose(popupProfile));
profileSubmitButton.addEventListener('click', () => popupClose(popupProfile))
popupCardOpenButton.addEventListener('click', popupCardEdit);
popupCardCloseButton.addEventListener('click', () => popupClose(popupCard));
cardSubmitButton.addEventListener('click', () => popupClose(popupCard));
popupImageCloseButton.addEventListener('click', () => popupClose(popupImage));