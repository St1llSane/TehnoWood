document.addEventListener('DOMContentLoaded', () => {

	const mainSlides = document.querySelectorAll('[data-main-slide]')
	const mainBtns = document.querySelectorAll('[data-main-btn]')

	function activeStartSlide(index = 0) {
		mainSlidesAddingHidden('hidden')
		mainSlides[index].classList.remove('hidden')
	}
	activeStartSlide()

	function mainSlidesAddingHidden(yourclass) {
		mainSlides.forEach((slide) => {
			slide.classList.add(`${yourclass}`)
		})
	}

	let index = 0
	mainBtns.forEach((btn) => {
		btn.addEventListener('click', function() {
			mainSlidesAddingHidden('hidden')
			if (this.dataset.mainBtnDirection == 'right') {
				index++
				if (index >= 3) {
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
		})
	})
})

// Написать код для свитчеров