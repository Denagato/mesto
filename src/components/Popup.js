export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }
  
  open() {
  this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }
  
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }
  
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(event) {
    if (event.target.classList.contains('popup_opened')) {
      this.close();
    }
  }
  
  setEventListeners() {
    const buttonClose = this._popup.querySelector('.popup__close');
    buttonClose.addEventListener('click', this.close.bind(this));
    this._popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
  }
}