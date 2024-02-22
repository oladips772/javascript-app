/** @format */
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");

function getUserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));

  if (info) {
    window.location = "http://127.0.0.1:5500/home.html";
  }

  emailInput.value = info?.emailValue;
  passwordInput.value = info?.passwordValue;
}

getUserInfo();

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const correctData = {
    email: "oladips200@gmail.com",
    password: "1234567",
  };

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!emailValue) {
    return alert("Email is required.");
  }

  if (!passwordValue) {
    return alert("Password is required");
  }

  if (emailValue !== correctData.email) {
    return alert("No account exists with email provided");
  }

  if (passwordValue !== correctData.password) {
    return alert("Wrong password!");
  }

  const userInfo = { emailValue, passwordValue };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  window.location = "http://127.0.0.1:5500/home.html";

  console.log("user logged in");
});
