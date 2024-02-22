/** @format */
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.location = "http://127.0.0.1:5500/login.html";
});
