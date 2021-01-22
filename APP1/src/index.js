var nameSelected = false;

function onNameButtonClick(name) {
  nameSelected = true;
  console.log(name);
}

function logInCheck() {
  if (nameSelected= false) {
    alert("Please select your name!");
  } else {
    window.location.href = "checker.html";
  }

}


//document.getElementById("app").innerHTML = ``//
