function showError(formElement, input, elements) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(elements.inputErrorClass);
};

function hideError(formElement, input, elements) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove(elements.inputErrorClass);
};

function checkInputValidation(formElement, input, elements) {
  if (input.checkValidity()) {
    hideError(formElement, input, elements);
  } else {
    showError(formElement, input, elements);
  }
};

function toggleButtonState(formElement, buttonElement, elements) {
  if (formElement.checkValidity()) {
      buttonElement.classList.remove(elements.inactiveButtonClass)
      buttonElement.disabled = false;
  } else {
      buttonElement.classList.add(elements.inactiveButtonClass)
      buttonElement.disabled = true;
  }
};

function setEventListeners(formElement, elements) {
    const inputElements = Array.from(formElement.querySelectorAll(elements.inputSelector));
    const buttonElement = formElement.querySelector(elements.submitButtonSelector);

    toggleButtonState(formElement, buttonElement, elements);

    inputElements.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidation(formElement, evt.target, elements, buttonElement);
            toggleButtonState(formElement, buttonElement, elements);
        });
    });
};

function enableValidation(elements, buttonElement) {
  const formElements = Array.from(document.querySelectorAll(elements.formSelector));
  formElements.forEach(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });
    setEventListeners(form, elements, formElement, buttonElement);
  });
};

function toggleButtonState(formElement, buttonElement, elements) {
  if (formElement.checkValidity()) {
      buttonElement.classList.remove(elements.inactiveButtonClass)
      buttonElement.disabled = false;
  } else {
      buttonElement.classList.add(elements.inactiveButtonClass)
      buttonElement.disabled = true;
  }
};

enableValidation({
  formSelector: '.popup__field',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'error'
});