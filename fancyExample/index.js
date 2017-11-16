
let nameDisplay = document.querySelector("#your-name");
let nameInput = document.querySelector("#name-input");

function updateDisplay(){
  nameDisplay.textContent = nameInput.value;
}

setInterval(updateDisplay, 100);
