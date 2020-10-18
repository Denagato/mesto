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
const elementCard = document.querySelector('.element');
const cardSection = document.querySelector('.elements');
const template = document.querySelector('#template');
const elements = document.querySelector('.elements__table');
const cardSubmitButton = document.querySelector('.popup__submit-button_card');

const popupImage = document.querySelector('.popup_image-open');
const popupImageCloseButton = document.querySelector('.popup__close-image');
const popupImageLink = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

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

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function popupCardEdit() {
  popupOpen(popupCard);
}

function popupCardClose() {
  popupClose(popupCardCloseButton);
}

function cardLike(event) {
  event.target.classList.toggle('element__like_liked');
}

function cardDelete(event) {
  event.target.closest('.element').remove();
}

const getCards = (data) => {
  const card = template.content.cloneNode(true);
  const elementTitle = card.querySelector('.element__title');
  const elementImage = card.querySelector('.element__image');
  const like = card.querySelector('.element__like');
  const deleteCard = card.querySelector('.element__delete');

  elementImage.src = data.link;
  elementImage.alt = data.name;
  elementTitle.textContent = data.name;

  like.addEventListener('click', cardLike);
  deleteCard.addEventListener('click', cardDelete);

  elementImage.addEventListener('click', (event) => {
    popupImageLink.src = event.target.src;
    popupImageLink.alt = event.target.alt;
    popupImageTitle.textContent = event.target.alt;

    popupOpen(popupImage)
  });
  return card;
};

function addCard(event) {
  event.preventDefault();
  elements.prepend(getCards({name: titleInput.value, link: linkInput.value}));
  popupClose(cardSubmitButton);
};

const renderCard = () => {
  const cards = initialCards.map(element => getCards(element));
  elements.prepend(...cards);
};

renderCard();

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

profileField.addEventListener('submit', formSubmitHandler);
cardField.addEventListener('submit', addCard);
popupProfileOpenButton.addEventListener('click', popupProfileEdit);
popupProfileCloseButton.addEventListener('click', () => popupClose(popupProfile));
profileSubmitButton.addEventListener('click', () => popupClose(popupProfile))
popupCardOpenButton.addEventListener('click', popupCardEdit);
popupCardCloseButton.addEventListener('click', () => popupClose(popupCard));
cardSubmitButton.addEventListener('click', () => popupClose(popupCard));
popupImageCloseButton.addEventListener('click', () => popupClose(popupImage));