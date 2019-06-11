const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close');

const hideSection = (id) => {
  document.getElementById(id).classList.add('hide');
}

const showSection = (id) => {
  document.getElementById(id).classList.remove('hide');
}

const showInstructions = () => { showSection('instructions');}

const closeInstructions = () => {hideSection('instructions');}

helpButton.addEventListener("click", showInstructions);
closeButton.addEventListener("click", closeInstructions)
