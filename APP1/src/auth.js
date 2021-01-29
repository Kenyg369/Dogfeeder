function signIn(username) {
  localStorage.setItem("username", username);
}

function signOut() {
  localStorage.removeItem("username");
  window.location.href = "index.html";
}

function getCurrentUser() {
  return localStorage.getItem("username");
}

function checkAuth() {
  const username = localStorage.getItem("username");
  if (!username) {
    window.location.href = "index.html";
  }
}

if (window.location.pathname !== "/index.html") {
  checkAuth();
}
