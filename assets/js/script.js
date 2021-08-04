// SPOILER
let slider = document.querySelector('.faq-slider')

slider.addEventListener('click', (event) => {
    let question = event.target.closest('.faq-slider__item-question')
    let btn = event.target.closest('.drop-btn')
    if (question || btn){
        event.target.closest('.faq-slider__item').classList.toggle('faq-slider__item--active')
    }
})
// /SPOILER

// BURGER-MENU
let nav = document.querySelector('.section-header')
let btnBurger = nav.querySelector('.btn-burger')
let activeNav = nav.querySelector('.main-navigation__wrapper--active')
let shadow = nav.querySelector('.section-header__shadow')

btnBurger.addEventListener('click', la = () => {
    if (!nav.classList.contains('section-header--active-nav')) {
        hideScroll()
        nav.classList.add('section-header--active-nav')
        
        gsap.set(activeNav, {x: 500})
        gsap.from(shadow, {duration: 0.2, opacity: 0})
        gsap.to(activeNav, {duration: 0.2, x:0})

    } else {
        closeNav()
    }
})

const closeNav = () => {
    gsap.to(shadow, {duration: 0.2, opacity: 0})
    gsap.to(activeNav, {duration: 0.2, x:500, onComplete: () => {
        gsap.set(shadow, {opacity: 1})
        gsap.set(activeNav, {x: 0})
        nav.classList.remove('section-header--active-nav')
        
        showScroll()
    }})
}

window.addEventListener('resize', closeNav)

const hideScroll = () => {
    const scrollWidth = `${getScrollWidth()}px`
    document.body.style.paddingRight = scrollWidth
    document.body.style.overflow = `hidden`
    
    nav.querySelector('.main-navigation').style.paddingRight = scrollWidth
}
const showScroll = (event) => {
        document.body.style.paddingRight = ''
        document.body.style.overflow = `visible`
        
        nav.querySelector('.main-navigation').style.paddingRight = ''
    }

const getScrollWidth = () => {
    const outer = document.createElement('div')

    outer.style.position = 'absolute'
    outer.style.top = '-9999px'
    outer.style.width = '50px'
    outer.style.height = '50px'
    outer.style.overflow = 'scroll'
    outer.style.visibility = 'hidden'

    document.body.appendChild(outer)
    const scrollWidth = outer.offsetWidth - outer.clientWidth
    document.body.removeChild(outer)
    
    return scrollWidth
}
// /BURGER-MENU
