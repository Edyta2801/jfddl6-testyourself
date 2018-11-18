(function () {
    'use strict'
    const linkNames = ['home-id', 'function-id', 'product-id', 'team-id', 'prices-id', 'premiere-reg-id'];
    const sectionNames = ['hero', 'function', 'info-products', 'info-team', 'prices', 'registration-premiere'];

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
        if (Math.ceil(window.scrollY + window.innerHeight) === document.body.clientHeight) {
            navItems.forEach((element) => {
                element.setInActive();
            })
            navItems[5].setActive();
        } else if (window.scrollY + 1 * navbarHeight > navItems[3].sectionEl.offsetTop) {
            navItems.forEach((element) => {
                element.setInActive();
            })
            navItems[4].setActive();
        } else if (window.scrollY + 6 * navbarHeight > navItems[3].sectionEl.offsetTop) {
            navItems.forEach((element) => {
                element.setInActive();
            })
            navItems[3].setActive();
        } else if (window.scrollY + 3 * navbarHeight > navItems[2].sectionEl.offsetTop) {
            navItems.forEach((element) => {
                element.setInActive();
            })
            navItems[2].setActive();
        } else if (window.scrollY + 4 * navbarHeight > navItems[1].sectionEl.offsetTop) {
            navItems.forEach((element) => {
                element.setInActive();
            })
            navItems[1].setActive();
        } else {
            navItems.forEach((element) => {
                element.setInActive();
            })
            navItems[0].setActive();
        }
    });
})()