const burgerBtn = document.querySelector('.nav__btn'),
      nav = document.querySelector('.nav');

burgerBtn.addEventListener('click', ()=> {
  nav.classList.toggle('menu__open');
});