let buttonOpenPopup = document.querySelector('.profile__info-button');
let popup = document.querySelector('.popup');
let buttonClosePopup = document.querySelector('.popup__close-image');
let saveButton = document.querySelector('.popup__submit-button');
let formElement = document.querySelector('.popup__container');
let formNameElement = document.querySelector('.popup__field-name');
let formJobElement = document.querySelector('.popup__field-job')
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = formNameElement.textContent;
  jobInput.value = formJobElement.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  formNameElement.textContent = nameInput.value;
  formJobElement.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
buttonOpenPopup.addEventListener('click', popupOpen);
buttonClosePopup.addEventListener('click', popupClose);