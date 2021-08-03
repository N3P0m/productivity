let slider = document.querySelector('.faq-slider')

slider.addEventListener('click', (event) => {
    let question = event.target.closest('.faq-slider__item-question')
    let btn = event.target.closest('.drop-btn')
    if (question || btn){
        event.target.closest('.faq-slider__item').classList.toggle('faq-slider__item--active')
    }
})