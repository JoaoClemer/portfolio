const navMenu = document.getElementById('nav-menu')
const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')
const navItem = document.querySelectorAll('.nav__item')
const emailLink = document.getElementById('emaillink')

navOpen.addEventListener('click',()=>{

    navMenu.classList.add('nav__menu--open')
})

navClose.addEventListener('click',()=>{

    navMenu.classList.remove('nav__menu--open')
})

navItem.forEach(item =>{
    item.addEventListener('click',()=>{
        navMenu.classList.remove('nav__menu--open')
    })
})

const header = document.getElementById('l-header')

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('l-header--scroll')
    }else{
        header.classList.remove('l-header--scroll')
    }
})
