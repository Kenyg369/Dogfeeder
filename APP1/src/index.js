var nameSelected = false;

function onNameButtonClick(name) {
  nameSelected = true;
  console.log(name);
  //use input instead of 
  //if logged in,jump to checker page
  //to do save name to localstorage
}
function onNameInput() {
  nameSelected = true;
  const x = document.getEslementById("nameInput").value;
  console.log(x);
}

function onSignIn() {
  if (nameSelected) {
    window.location.href = "checker.html";
  } else {
    alert("Please select your name!");
  }
}


