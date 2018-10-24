const menuToggle = document.querySelector('.section-nav-top__toggle');
const menuList = document.querySelector('.section-nav-top__flex-wrapper');
const menuListItems = document.querySelectorAll('.section-nav-top__flex-wrapper__menu-item');

const menuListHeight = menuListItems[0].clientHeight * menuListItems.length;

menuList.classList.add('section-nav-top__flex-wrapper--collapsed');

menuToggle.addEventListener(
    'click',
    (event) => {
        event.preventDefault();

        if(menuList.classList.contains('section-nav-top__flex-wrapper--collapsed')){
            menuList.classList.remove('section-nav-top__flex-wrapper--collapsed');
            menuList.style.maxHeight = menuListHeight + 'px';
        }else{
            menuList.classList.add('section-nav-top__flex-wrapper--collapsed');
        }


    }
)