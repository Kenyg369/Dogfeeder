var nameSelected = false;

function onNameButtonClick(name) {
  nameSelected = true;
  console.log(name);
  return name
  //use input instead of 
  //if logged in,jump to checker page
  //to do save name to localstorage
}

function onSignIn() {
  if (nameSelected) {
    const feeder =
    window.location.href = "checker.html";

  } else if(document.getElementById("NameInput").value !== null){
    const feeder = document.getElementById("NameInput").value
    console.log(feeder);
    /*window.location.href = "checker.html"; 
    localStorage.setItem("Feeder",feeder)
    var jsonString = localStorage.getItem("Feeder");
    var retrievedObject = JSON.parse(jsonString);
    console.log(retrievedObject);*/


  } else {
    alert("Please select your name!");
  }
}


