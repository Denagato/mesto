import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    const formValues = {};
    this._inputList.forEach(element => {
      formValues[element.name] = element.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector('.popup__field');
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}