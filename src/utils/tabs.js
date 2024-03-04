

const btn1 = document.querySelector('#prod-nav-details')
const target1 = document.querySelector('#prod-content-details')

const btn2 = document.querySelector('#prod-nav-trent')
const target2 = document.querySelector('#prod-content-trent')

btn1.addEventListener('click', () => {
  btn1.classList.add("__active")
  btn2.classList.remove("__active")

  target1.classList.remove('__inactive')
  target2.classList.add('__inactive')
})

btn2.addEventListener('click', () => {
  btn2.classList.add("__active")
  btn1.classList.remove("__active")

  target2.classList.remove('__inactive')
  target1.classList.add('__inactive')
})
