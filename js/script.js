// Dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain current theme from interface 
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

// Validate if user has prev chosen topic
if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon'?'add':'remove'](iconTheme)
}

// Activate or deactivate the theme
themeButton.addEventListener('click', () => {
    // add or remove the light or dark icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save the theme
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Menu show Y hidden
const navMenu = document.getElementById('nav-menu')
const navToggle =document.getElementById('nav-toggle')
const navClose =document.getElementById('nav-close')

// Menu show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu hide
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



// Remove menu profile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when click on nav links, removes show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log('remove menu profile is working')

/// Typewriter function effect

// import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Josh Thephasdin'],
  autoStart: true,
  loop: true,
  cursor: "|"
});


// Swiper effect for portfolio section

var swiper = new Swiper(".blog-slider", {
    // cssMode: true,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });


//   Scroll up section

function scrollUp(){
    const scrollup = document.getElementById('scroll-up')
    // when the scroll is higher than 560 viewpoint, then scroll up icon appears
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

//  Activate scroll section, highlights

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)