/* HIDDEM MENU */

const hidden_menu_icon = document.getElementById('open-hidden-menu');
const hidden_menu_container = document.getElementById('hidden-menu-container');
const close_menu_hidden = document.getElementById('close-hidden-menu');

hidden_menu_icon.addEventListener('click', () => {
  hidden_menu_container.classList.add('right');
  hidden_menu_icon.style.display = 'none';
});

close_menu_hidden.addEventListener('click', () => {
  hidden_menu_container.classList.remove('right');
  hidden_menu_icon.style.display = 'block';
});


/* TESTEMUNHOS - SWEEPER JS */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  speed: 400,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  centerSlides: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    318: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  },

});


/* BOTÃO TOPO DA PÁGINA */

const topo_botao = document.getElementById('topo-botao');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topo_botao.classList.add('bottom');
  } else {
    topo_botao.classList.remove('bottom');
  }
});

/* SCROLL REVEAL */

const sr = ScrollReveal({
  distance: "8em",
  duration: 3000,
});

sr.reveal(`.sobre-img, .primeira-linha`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.main-container, .sobre-description-box, .segunda-linha`, {
  origin: "right",
  interval: 100,
});

sr.reveal(`.contacte-section`, {
  origin: "bottom",
  interval: 100,
});