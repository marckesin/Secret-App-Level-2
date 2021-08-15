const checkBox = document.getElementById('showPass');
const passwordInput = document.getElementById('inputPass');

function isChecked(event) {
  const checkState = event.target.checked;
  if (checkState) {
    passwordInput.type = 'text';
    checkBox.setAttribute('aria-label', 'Ocultar senha');
  } else {
    passwordInput.type = 'password';
    checkBox.setAttribute('aria-label', 'Mostra senha');
  }
}

checkBox.addEventListener('change', isChecked);
