const textEl = document.querySelector('#validation-input')
console.log(textEl.getAttribute('data-length'))
textEl.addEventListener('blur', event => {
	if (event.target.value.length == textEl.getAttribute('data-length')) {
		textEl.classList.add('valid')
		if (textEl.classList.contains('invalid')) {
			textEl.classList.remove('invalid')
		}
	} else {
		if (textEl.classList.contains('valid')) {
			textEl.classList.remove('valid')
		}
		textEl.classList.add('invalid')
	}
})