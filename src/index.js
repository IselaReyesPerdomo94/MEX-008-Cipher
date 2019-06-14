//Working with help button-instructions
const helpButton = document.getElementById('help-button');
const closeButton = document.getElementById('close');

//Function that hide section with id
const hideSection = (id) => {
  document.getElementById(id).classList.add('hide');
}
//Function that show section with id
const showSection = (id) => {
  document.getElementById(id).classList.remove('hide');
}
//Functionability for help button and close button
const showInstructions = () => { showSection('instructions');}
const closeInstructions = () => {hideSection('instructions');}

helpButton.addEventListener("click", showInstructions);
closeButton.addEventListener("click", closeInstructions)

//To open cipher-code section
const cifrarButton = document.getElementById('cifrar-button');

const openCipherSection = () => {
  hideSection('first-page');
  showSection('cipher-code');
}

cifrarButton.addEventListener("click", openCipherSection);

//saving the input of offSet in cipher-code
const encodeIcon = document.getElementById('encode-icon');
let codeOffSet = document.getElementById('offSet-c');
let textToCode = document.getElementById('message-to-code');//saving text input in cipher-code

const printNewMessage = () => {
  const blankSpace = document.getElementById('code-message');//getting paragraph.
  let codeOffSetNumber = parseInt(codeOffSet.value);
  let textCoded = cipher.encode(codeOffSetNumber, textToCode.value);
  blankSpace.innerHTML = textCoded;
}

encodeIcon.addEventListener("click", printNewMessage);

//to go back to main page with logo from cipher-code
const logoC = document.getElementById('logo-c');

const goTofirstPageC = () => {
  hideSection('cipher-code');
  showSection('first-page');
}

logoC.addEventListener("click", goTofirstPageC);

//to go back to main page with name of goTofirstPage
const theSnitchTextC = document.getElementById('the-snitch-h1-c');

const backToFirstPageC = () =>{
  hideSection('cipher-code');
  showSection('first-page');
}

theSnitchTextC.addEventListener("click", backToFirstPageC);

//To open cipher-decode section with button
const descifrarButton = document.getElementById('descifrar-button');

const openDecodeSection = () => {
  hideSection('first-page');
  showSection('cipher-decode');
}

descifrarButton.addEventListener("click", openDecodeSection);

//Saving value of offSet in cipher-decode section
const decodeIcon = document.getElementById('decode-icon');
let decodeOffSet = document.getElementById('offSet-d');
let textToDecode = document.getElementById('message-to-decode');//Saving text of textarea in cipher-decode section

const printDecodedMessage = () => {
  const blankSpace = document.getElementById('decode-message');
  let decodeOffSetValue = parseInt(decodeOffSet.value);
  let textDecoded = cipher.decode(decodeOffSetValue, textToDecode.value);
  blankSpace.innerHTML = textDecoded;
}

decodeIcon.addEventListener('click', printDecodedMessage);
//to go back to main page with logo from cipher-decode
const logoD = document.getElementById('logo-d');

const goTofirstPageD = () => {
  hideSection('cipher-decode');
  showSection('first-page');
}

logoD.addEventListener("click", goTofirstPageD);
//working with yes button in cipher-code section to redirect to cipher-decode

const yesButtonC = document.getElementById('yes-button');

const goingToDecodeSection = () => {
  hideSection('cipher-code');
  showSection('cipher-decode');
}

yesButtonC.addEventListener("click", goingToDecodeSection);
//working with yes button in cipher-decode section to redirect to cipher-code

const yesButtonD = document.getElementById('yes-button-decode');

const goingToCodeSection = () => {
  hideSection('cipher-decode');
  showSection('cipher-code');
}

yesButtonD.addEventListener("click", goingToCodeSection)

//to go back to main page with name of goTofirstPage
const theSnitchTextD = document.getElementById('the-snitch-h1-d');

const backToFirstPageD = () =>{
  hideSection('cipher-decode');
  showSection('first-page');
}

theSnitchTextD.addEventListener("click", backToFirstPageD);
