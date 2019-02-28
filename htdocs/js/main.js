document.addEventListener('DOMContentLoaded', () => {
	const buttonDotsStartNode = document.querySelector('.js-button-dots-start')
	const navNode = document.querySelector('.js-nav')
	const buttonCloseNode = document.querySelector('.js-button-close')

	buttonDotsStartNode.addEventListener('click', () => {
		navNode.classList.add('nav-open')
		buttonDotsStartNode.classList.add('button-dots-start-hidden')
	})

	buttonCloseNode.addEventListener('click', () => {
		navNode.classList.remove('nav-open')
		buttonDotsStartNode.classList.remove('button-dots-start-hidden')
	})
})
