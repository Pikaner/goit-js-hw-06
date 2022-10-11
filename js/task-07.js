const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

inputEl.addEventListener('change', ellement => {
    spanEl.style.fontSize = `${ellement.target.value }px`
})