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
export const popupAvatar = document.querySelector('.popup_avatar-edit');
export const avatarField = document.querySelector('.popup__field-avatar-edit');
export const popupAvatarOpenButton = document.querySelector('.profile__avatar-button')
export const popupDelete = document.querySelector('.popup_image-delete');

export const validationElements = {
  formSelector: '.popup__field',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'error'
};

export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/',
  headers: {
    authorization: 'f1223aac-5b35-40a7-86dd-5f21c8954485',
    'Content-Type': 'application/json'
  }
};