
'use strict'
const linkNames = ['home-id', 'function-id', 'product-id', 'team-id', 'premiere-reg-id'];
const sectionNames = ['hero', 'function', 'info-products', 'info-team', 'registration-premiere'];

const navLinks = linkNames.map((element) => {
    return document.querySelector(`#section-nav-top__${element}`);
});

const navSections = sectionNames.map((element) => {
    return document.querySelector(`#section-${element}`);
});

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

    if (window.scrollY < 560) {
        navItems[0].setActive();
    } else if (window.scrollY >= 560 && window.scrollY < 790) {
        navItems[1].setActive();
    } else if (window.scrollY >= 790 && window.scrollY < 3159) {
        navItems[2].setActive();
    } else if (window.scrollY >= 3159 && window.scrollY < 3259) {
        navItems[3].setActive();
    } else {
        navItems[4].setActive();
    }
    console.log(window.scrollY)
});
