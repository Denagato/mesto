let buttonOpenPopup = document.querySelector('.profile__info-button');
let popup = document.querySelector('.popup');
let buttonClosePopup = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__field');
let nameInput = document.querySelector('.popup__field-name');
let jobInput = document.querySelector('.popup__field-job')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function popupOpen() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
buttonOpenPopup.addEventListener('click', popupOpen);
buttonClosePopup.addEventListener('click', popupClose);