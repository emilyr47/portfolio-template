console.log("linked function.js file is working");

// Start Scrolling & Sections
function scrollTo(about) {
    location.about = "#about" + about;
}

// Start Nav 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction(nav)};

// Get the nav
var nav = document.getElementById("nav");

// Get the offset position of the nav
var sticky = nav.offsetTop;

// Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(nav) {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
// End Nav

function showDiv() {
    document.getElementById('errMessage').style.display = "block";
 }