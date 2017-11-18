// mobile menu
var menuButton = document.querySelector('.hamburger-menu-link')
var menuMobile = document.querySelector('.hamburger-menu')
var menuClose = document.querySelector('.hamburger-menu__close-btn')

menuButton.addEventListener('click', function() {
    menuMobile.classList.add('hamburger-menu_visible')   
})
menuClose.addEventListener('click', function() {
    menuMobile.classList.remove('hamburger-menu_visible')   
})