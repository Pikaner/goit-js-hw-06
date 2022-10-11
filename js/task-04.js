let conterValue = 0

const valueEl = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', () => {
    conterValue--
    valueEl.textContent = conterValue
})

buttonIncrement.addEventListener('click', () => {
    conterValue++
    valueEl.textContent = conterValue
})