helpButton = getElementById('help-button');

const hideSection = () => {
  document.getElementById(id).classList.add('hide');
}

const showSection = () => {
  document.getElementById(id).classList.remove('hide');
}

const showInstructions = () => {
  hideSection('first-page');
  showSection('instructions');

}

helpButton.addEventListener("click", showInstructions());
