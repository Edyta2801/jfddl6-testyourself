
'use strict'
const linkNames = ['home-id', 'function-id', 'product-id', 'team-id', 'premiere-reg-id'];
const sectionNames = ['hero', 'function', 'info-products', 'info-team', 'registration-premiere'];

const navLinks = linkNames.map((element) => {
    return document.querySelector(`#section-nav-top__${element}`);
});

const navSections = sectionNames.map((element) => {
    return document.querySelector(`#section-${element}`);
});

const navbarHeight = document.querySelector('.section-nav-top').clientHeight;

function NavItem(itemEl, sectionEl) {
    this.itemEl = itemEl;
    this.sectionEl = sectionEl;
    this.elementHeight = this.sectionEl.clientHeight;
}

NavItem.prototype.setActive = function () {
    this.itemEl.classList.add('active');
}
NavItem.prototype.setInActive = function () {
    this.itemEl.classList.remove('active');
}

let navItems = navLinks.map((element, i) => {
    return new NavItem(element, navSections[i]);
});

document.addEventListener('scroll', () => {
    navItems.forEach((element) => {
        element.setInActive();
    })

    if (document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight) {
        navItems[4].setActive();
    }
    // } else if () {

    // } else if () {

    // } else if () {

    // } else () {

    // }

    console.log(document.documentElement.clientHeight)
    console.log((document.documentElement.scrollHeight - document.documentElement.scrollTop ));

});


// if ((window.scrollY >= (navItems[0].sectionEl.offsetTop - navbarHeight)) && (window.scrollY < (navItems[0].sectionEl.offsetTop - navbarHeight + navItems[0].sectionEl.clientHeight)) ) {
//     navItems[0].setActive();
// } else if ((window.scrollY >= navItems[1].sectionEl.offsetTop - navbarHeight)  && (window.scrollY < (navItems[1].sectionEl.offsetTop - navbarHeight + navItems[1].sectionEl.clientHeight) ) ) {
//     navItems[1].setActive();
// } else if ((window.scrollY >= navItems[2].sectionEl.offsetTop - navbarHeight)  && (window.scrollY < (navItems[2].sectionEl.offsetTop - navbarHeight + navItems[2].sectionEl.clientHeight)) ) {
//     navItems[2].setActive();
// } else if ((window.scrollY >= navItems[3].sectionEl.offsetTop - navbarHeight)  && (window.scrollY < (navItems[3].sectionEl.clientHeight - navbarHeight + navItems[3].sectionEl.clientHeight)) ) {
//     navItems[3].setActive();
// } else {
//     navItems[4].setActive();
// }