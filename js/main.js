document.addEventListener('DOMContentLoaded', () => {
	// const slider = document.querySelector('.main-slider__slides')
// const slidesCount = slider.querySelectorAll('img').length
// const slides = document.querySelectorAll('.main-slider__slides-img')
// const btnLeft = document.querySelector('.main-slider__content-btn--left')
// const btnRight = document.querySelector('.main-slider__content-btn--right')
// const slideIndicator = document.querySelectorAll('.main-slider__bottom-slides_indicator')


// slides.forEach((slide, index) => {
	
// 	slide.dataset.index = index
	
// 	slides[0].setAttribute('data-active', '')
// })

// // Кнопки Влево и Вправо
// btnLeft.addEventListener('click', function() {
// 	changeSlide('prev')
// })

// btnRight.onclick =  function() {
// 	changeSlide('next')
// }

// // Смена слайда в зависимости от направления
// function changeSlide(direction) {
// 	// Находим текущий слайд
// 	const currentSlide = slider.querySelector('[data-active]')
// 	const currentSlideIndex = +currentSlide.dataset.index
// 	// Скрываем текущий слайд
// 	currentSlide.classList.add('hidden')
// 	currentSlide.removeAttribute('data-active')

// 	// Находим следующий слайд в зависимости от нажатой кнопки
// 	let nextSlideIndex
// 	if (direction === 'next') {
// 		nextSlideIndex = currentSlideIndex + 1 === slides.length ? 0 : currentSlideIndex + 1
// 	}
// 	if (direction === 'prev') {
// 		nextSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1
// 	}

// 	// Показываем следующий слайд в зависимости от нажатой кнопки
// 	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
// 	nextSlide.classList.remove('hidden')
// 	nextSlide.setAttribute('data-active', '')
// }



	
})



