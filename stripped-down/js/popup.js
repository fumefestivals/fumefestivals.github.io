// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Check if the pop-up should be shown
if (getCookie("popupClosed") !== "true") {
    setTimeout(function () {
        showPopup();
    }, 10000);
}

function showPopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "block";
    popup.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling
    centerPopup(); // Call the centering function
}

function centerPopup() {
    var popup = document.getElementById("popup");
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var popupHeight = popup.clientHeight;
    var topPosition = scrollTop + (windowHeight - popupHeight) / 2;
    popup.style.top = topPosition + "px";
}

window.addEventListener("resize", centerPopup);
window.addEventListener("scroll", centerPopup);

function closePopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "none";
    popup.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
    setCookie("popupClosed", "true", 1); // Set the cookie to prevent the pop-up for 1 day (24 hours)
}

function redirectToContestPage() {
    window.location.href = "djcontest/apply.html";
}