import {
    popupOpen,
    popupImage,
    popupImageLink,
    popupImageTitle
} from './index.js';

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const elementCard = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return elementCard;
  }

  createCard() {
    this._element = this._getTemplate();

    const elementImage = this._element.querySelector('.element__image');
    const elementTitle = this._element.querySelector('.element__title');

    elementImage.src = this._link;
    elementImage.alt = this._name;
    elementTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _cardDelete() {
    this._element.remove();
    this._element = null;
  }

  _cardLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_liked');
  }

  _imagePopup() {
    popupImageLink.src = this._link;
    popupImageLink.alt = this._name;
    popupImageTitle.textContent = this._name;

    popupOpen(popupImage);
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._cardDelete();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._cardLike();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._imagePopup();
    });
  }
}