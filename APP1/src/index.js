var nameSelected = false;

function onNameButtonClick(name) {
  nameSelected = true;
  console.log(name);
}

function onSignIn() {
  if (nameSelected) {
    window.location.href = "checker.html";
  } else {
    alert("Please select your name!");
  }
}


//document.getElementById("app").innerHTML = ``//
