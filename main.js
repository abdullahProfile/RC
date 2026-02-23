
const menuOpenBtn = document.querySelector('.header__menu-open');
const menuCloseBtn = document.querySelector('.header__menu-close');
const menu = document.querySelector('.header__menu');

menuOpenBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

const menuLinks = document.querySelectorAll('.header__menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});


document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuOpenBtn.contains(e.target)) {
    menu.classList.remove('active');
  }
});
