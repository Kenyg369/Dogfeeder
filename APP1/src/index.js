let nameSelected = "";

const nameButtons = document.querySelectorAll(".username-button");

for (const nameButton of nameButtons) {
  nameButton.addEventListener("click", () => {
    nameSelected = nameButton.dataset.name;
  });
}

document.getElementById("sign-in-button").addEventListener("click", () => {
  const nameEntered = document.getElementById("nameInput").value;
  const username = nameSelected ? nameSelected : nameEntered;
  
  if (username) {
    signIn(username);
    window.location.href = "checker.html";
  } else {
    alert("please enter/select a name");
  }
});
