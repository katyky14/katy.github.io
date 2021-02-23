
// nav javascript side
const menuDisplayButton = document.getElementById('menu-trigger');


menuDisplayButton.addEventListener("click", displaySideMenuRight);

const menuCloseButton = document.getElementById("menu-close");


menuCloseButton.addEventListener("click", hideSideMenuRight);

const sideMenuRight = document.getElementById('side-menu-right');
console.log(sideMenuRight);

function displaySideMenuRight(){
console.log ("display was clicked"); 
sideMenuRight.classList.add("show-menu");
}

function hideSideMenuRight(){
  sideMenuRight.classList.remove("show-menu");
}



var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);