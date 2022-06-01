const navOpenBtn = document.querySelector("[data-nav-open-btn]")
const navbar = document.querySelector("[data-navbar]")
const navCloseBtn = document.querySelector("[data-nav-close-btn]")

const navElements = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function() {
    navbar.classList.toggle("active")
   
  });
}

var swiper = new Swiper(".trending-content", {

  loop: true,

  grabCursor: true,

  slidesPerView: 1,

  spaceBetween: 10,

  pagination: {

    el: ".swiper-pagination",

    clickable: true,

  },

  autoplay: {

    delay: 5000,

    disableOnInteraction: false,

  },

  breakpoints: {

    640: {

      slidesPerView: 2,

      spaceBetween: 10,

    },

    768: {

      slidesPerView: 3,

      spaceBetween: 15,

    },

    1068: {

      slidesPerView: 5,

      spaceBetween: 50,

    },

  },

});

// go top

const goToBtn = document.querySelector("[data-go-top]")

window.addEventListener('scroll', function () {
  if(this.window.scrollY >= 800) {
    goToBtn.classList.add('active')
  } else {
    goToBtn.classList.remove('active')
  }
})