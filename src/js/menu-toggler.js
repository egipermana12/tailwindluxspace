import { addClass, removeClass } from './utils-class';

const menuTogglerid = document.getElementById('menu-toggler');
menuTogglerid.addEventListener('click', function () {
  const menuId = document.getElementById('menu');
  if (menuId.className.indexOf('opacity-0') > -1) {
    addClass(menuTogglerid, 'fixed top-0 right-0');
    removeClass(menuTogglerid, 'relative');
    addClass(menuId, 'opacity-100 z-30');
    removeClass(menuId, 'opacity-0 invisible');
  } else {
    removeClass(menuTogglerid, 'fixed top-0 right-0');
    addClass(menuTogglerid, 'relative');
    addClass(menuId, 'opacity-0 invisible');
    removeClass(menuId, 'opacity-100 z-30');
  }
});
