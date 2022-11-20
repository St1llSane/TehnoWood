document.addEventListener('DOMContentLoaded', () => {

	function mainSlider() {
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

		// Переключение слайдов по кнопкам влево и вправо
		let index = 0
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


	// Модальные окна 
	function modals() {
		const callbackBtn = document.querySelector('.nav__contact-text')
		const priceBtn = document.querySelector('.main-slider__content-info_link')
		const modalCallback = document.querySelector('.modal--callback')
		const modalPrice = document.querySelector('.modal--price')

		function defaultHideModals() {
			modalCallback.classList.add('hide-modal')
			modalPrice.classList.add('hide-modal')
		}
		defaultHideModals()

		function hideModal() {
			modalCallback.classList.add('hide-modal')
			modalCallback.classList.remove('show-modal')
			modalPrice.classList.add('hide-modal')
			modalPrice.classList.remove('show-modal')
		}
		
		callbackBtn.addEventListener('click', hideModal)
		
		function showModal(modal) {
			modal.classList.remove('hide-modal')
			modal.classList.add('show-modal')
		}

		function showModalBtn(btn, modal) {
			btn.addEventListener('click', e => {
				if (e.target === btn) {
					showModal(modal)
				}
			})
		}
		showModalBtn(callbackBtn, modalCallback)
		showModalBtn(priceBtn, modalPrice)

		function hideModalOnFadeClick(modal) {
			modal.addEventListener('click', e => {
				if (e.target === modal) {
					hideModal()
				}
			})
		}
		hideModalOnFadeClick(modalCallback)
		hideModalOnFadeClick(modalPrice)
	}
	modals()
})