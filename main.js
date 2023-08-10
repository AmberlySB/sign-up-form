function validatePassword() {
  const password = document.getElementById('password').value;
  const passwordConfirmation =
    document.getElementById('password-confirm').value;
  const validationMessage = document.getElementById('validation-message');
  console.log(password);
  if (password != passwordConfirmation) {
    validationMessage.textContent = '*Passwords do not match*';
    document
      .getElementById('password')
      .classList.add('border-red-600', 'focus:outline-red-600');
    document
      .getElementById('password-confirm')
      .classList.add('border-red-600', 'focus:outline-red-600');
  } else {
    validationMessage.textContent = '';
    document
      .getElementById('password')
      .classList.remove('border-red-600', 'focus:outline-red-600');
    document
      .getElementById('password-confirm')
      .classList.remove('border-red-600', 'focus:outline-red-600');
  }
}
