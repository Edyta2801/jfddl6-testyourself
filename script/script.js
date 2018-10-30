const menuToggle = document.querySelector(".section-nav-top__toggle");
const menuList = document.querySelector(".section-nav-top__flex-wrapper");
const menuListItems = document.querySelectorAll(
  ".section-nav-top__flex-wrapper-menu-item"
);

const menuListHeight = menuListItems[0].clientHeight * menuListItems.length;

menuList.classList.add("section-nav-top__flex-wrapper--collapsed");

menuToggle.addEventListener("click", event => {
  event.preventDefault();

  if (menuList.classList.contains("section-nav-top__flex-wrapper--collapsed")) {
    menuList.classList.remove("section-nav-top__flex-wrapper--collapsed");
    menuList.style.maxHeight = menuListHeight + "px";
  } else {
    menuList.classList.add("section-nav-top__flex-wrapper--collapsed");
  }
});

/*slideshow*/
let index=0;
const images = [
  "url('/images/hero1.jpg')",
  "url('/images/hero2.jpg')",
  "url('/images/hero3.jpg')",
  "url('/images/hero4.jpg')"
];
let heroBox = document.body.querySelector('#section-hero');
let dots = document.getElementsByClassName("dot");
function showSlide() {
  
  if (index < images.length) {
    
    heroBox.style.backgroundImage = images[index];
    dots[index].style.backgroundColor="white";
    dots[index].style.backgroundColor ="red";
    
    index++;
  } else index=0;

  setTimeout(showSlide,1000);

}
  



showSlide();

