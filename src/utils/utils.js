export const popupImageLink = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__image-title');
export const popupImage = document.querySelector('.popup_image-open');
export const popupProfileOpenButton = document.querySelector('.profile__info-button');
export const popupProfile = document.querySelector('.popup_profile');
export const profileField = document.querySelector('.popup__field_profile');
export const nameInput = document.querySelector('.popup__field-name');
export const jobInput = document.querySelector('.popup__field-job')
export const popupCardOpenButton = document.querySelector('.profile__add-button');
export const popupCard = document.querySelector('.popup_add-card');
export const cardField = document.querySelector('.popup__field_card');
export const titleInput = document.querySelector('.popup__field-title');
export const linkInput = document.querySelector('.popup__field-link');
export const elements = document.querySelector('.elements__table');

export const initialCards = [
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

export const validationElements = {
  formSelector: '.popup__field',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'error'
};