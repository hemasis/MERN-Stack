const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }
});
// This code toggles the visibility of a password input field.
// When the button is clicked, it checks the current type of the input field.