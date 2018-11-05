(function () {
  'use strict'
  const menuToggle = document.querySelector(".section-nav-top__toggle");
  const menuList = document.querySelector(".section-nav-top__flex-wrapper");
  const menuListItems = document.querySelectorAll(
    ".section-nav-top__item"
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

  const linkNames = ['home-id', 'function-id', 'product-id', 'team-id', 'premiere-reg-id']

  const navLinks = linkNames.map((element) => {
    return document.querySelector(`#section-nav-top__${element}`);
  });

  navLinks.forEach((element) => {

    element.addEventListener('click', event => {

      menuList.classList.add("section-nav-top__flex-wrapper--collapsed");
    })
  })
})()
