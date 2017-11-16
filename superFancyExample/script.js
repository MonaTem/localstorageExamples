let userInput = document.querySelector("#username");
let button = document.querySelector("button");

button.addEventListener("click", function(e){
  e.preventDefault();
  localStorage.setItem("user", userInput.value);
  window.location = "./result.html";
});
