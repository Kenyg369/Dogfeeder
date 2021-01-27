var nameSelected = false;

function onNameButtonClick(name) {
  nameSelected = true;
  console.log(name);
  //to do save name to localstorage
}

function onSignIn() {
  if (nameSelected) {
    window.location.href = "checker.html";
  } else {
    alert("Please select your name!");
  }
}


//document.getElementById("app").innerHTML = ``//
