// LAPTOP
// let _animated = [
//     'computer',
//     'shadow',
//     'hole',
//     'code-cover-screen'
// ].map((id) => document.getElementById(id));
let getById = (id) => document.getElementById(id)

let _animated = [
    getById('computer'),
    getById('shadow'),
    getById('hole'),
    getById('code-cover-screen')
];

let btn = document.querySelector('.btn_laptop');

btn.addEventListener('click', () => {
    _animated.forEach(function(el){
        el.style.animation = 'none'; 
        setTimeout(() => {
            el.style.animation = '';
          }, 10);
     });    
});

// MENU
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');
      menuItems = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  })
});

//WOW
wow = new WOW(
    {
        offset: 200,
        mobile: true,
    }
)
wow.init();

// SKILLS - RATINGS %
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Page up
  $(document).ready(function(){
    //Smooth scroll and pageup
    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
  });