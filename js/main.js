// mobile menu
let menuButton = document.querySelector('.hamburger-menu-link')
let menuMobile = document.querySelector('.hamburger-menu')
let menuClose = document.querySelector('.hamburger-menu__close-btn')

menuButton.addEventListener('click', () => {
    menuMobile.classList.add('hamburger-menu_visible')
    document.body.classList.add("no-scroll");
})
menuClose.addEventListener('click', () => {
    menuMobile.classList.remove('hamburger-menu_visible')   
    document.body.classList.remove("no-scroll");   
})