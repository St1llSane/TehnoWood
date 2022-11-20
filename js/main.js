document.addEventListener('DOMContentLoaded', () => {

	// Главный слайдер
	const mainSlides = document.querySelectorAll('[data-main-slide]')
	const mainBtns = document.querySelectorAll('[data-main-btn]')
	const mainSwitchers = document.querySelectorAll('[data-main-switcher]')
	
	// Начальный слайд и свитчер
	function activeStartSlide(index = 0) {
		mainSlides[index].classList.remove('hidden')
		mainSwitchers[index].classList.add('main-slider__bottom-slides_indicator--active')
	}
	addHiddenRemoveActive()
	activeStartSlide()
	
	// Скрытие слайда и удаление стилей со свитчера
	function addHiddenRemoveActive() {
		mainSlides.forEach(slide => {
			slide.classList.add('hidden')
		})
		mainSwitchers.forEach(switcher => {
			switcher.classList.remove('main-slider__bottom-slides_indicator--active')
		})
	}
	
	function mainSlider() {
		let index = 0
		
		// Переключение слайдов по кнопкам влево и вправо
		mainBtns.forEach(btn => {
			btn.addEventListener('click', function() {
				addHiddenRemoveActive()
				if (this.dataset.mainBtnDirection == 'right') {
					index++
					if (index > 2) {
						index = 0
					}
					mainSlides[index].classList.remove('hidden')
				}
				if (this.dataset.mainBtnDirection == 'left') {
					index--
					if (index < 0) {
						index = 2
					}
					mainSlides[index].classList.remove('hidden')
				}
				mainSwitchers[index].classList.add('main-slider__bottom-slides_indicator--active')
			})
		})

		// Переключение слайдов по свитчерам
		mainSwitchers.forEach(switcher => {
			switcher.addEventListener('click', e => {
				addHiddenRemoveActive()
				let target = e.target
				index = target.dataset.mainSwitcherIndex
				target.classList.add('main-slider__bottom-slides_indicator--active')
				mainSlides[index].classList.remove('hidden')
			})
		})
	}
	mainSlider()

})