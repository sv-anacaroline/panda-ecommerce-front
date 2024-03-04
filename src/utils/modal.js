const btn = document.querySelector('#ship-calc-btn')
const input = document.querySelector('#ship-calc-input')
const modal = document.querySelector("#modal")
const btnClose = document.querySelector('#modal-btn')

btn.addEventListener('click', () => {
  modal.classList.add("__active")
})


btnClose.addEventListener('click', () => {
  modal.classList.remove("__active")
})
