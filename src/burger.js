document.querySelector('.header__btns__burger').addEventListener('click', function (e){
  document.querySelector('.header__btns__close').classList.add('header__active_burger');
  document.querySelector('.header__nav').classList.add('header__nav_active');
})

document.querySelector('.header__btns__close').addEventListener('click', function (e){
  document.querySelector('.header__btns__close').classList.remove('header__active_burger');
  document.querySelector('.header__nav').classList.remove('header__nav_active');
})

document.querySelector('.header__btns__personal').addEventListener('click', function (e) {
  document.querySelectorAll('.header__lk-by-click').forEach(el => {
    el.classList.toggle('header__active_lk');
  })
})