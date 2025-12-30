function login() {
  document.getElementById("login-page").classList.remove("active");
  document.getElementById("login-page").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function logout() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("login-page").classList.add("active");
}

function navigate(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
}

function submitRequest(e) {
  e.preventDefault();
  alert("Request submitted successfully!");
}
