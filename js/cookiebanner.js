// JavaScript to show/hide the cookie banner
document.addEventListener("DOMContentLoaded", function() {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  // Check if user has already accepted cookies
  if (localStorage.getItem("cookiesAccepted") === "true") {
      cookieBanner.style.display = "none";
  }

  acceptCookiesButton.addEventListener("click", function() {
      // Set a flag in local storage to remember that cookies have been accepted
      localStorage.setItem("cookiesAccepted", "true");

      // Hide the cookie banner
      cookieBanner.style.display = "none";
  });
});