export default class FormValidator {
  constructor(elements, formElement) {
    this._elements = elements;
    this._formElement = formElement;
    this._inputElements = Array.from(formElement.querySelectorAll(elements.inputSelector));
    this._buttonElement = formElement.querySelector(elements.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }

  _setEventListeners() {
    this._inputElements.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidation(input);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._buttonElement.classList.remove(this._elements.inactiveButtonClass);
      this._buttonElement.disabled = false;
    } else {
      this.disableButton();
    }
  }

  disableButton() {
    this._buttonElement.classList.add(this._elements.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _checkInputValidation(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
      this._hideError(errorElement, input);
    } else {
      this._showError(errorElement, input);
    }
  }

  _showError(errorElement, input) {
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._elements.inputErrorClass);
  }

  _hideError(errorElement, input) {
    errorElement.textContent = '';
    input.classList.remove(this._elements.inputErrorClass);
  }
}