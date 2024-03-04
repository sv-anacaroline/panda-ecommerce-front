function accordion(btn, target) {
  btn.addEventListener('click', () => {
    target.classList.toggle('__active')
  })
}

const btn1 = document.querySelector('#btn-prod-detail-1')
const target1 = document.querySelector('#target-prod-detail-1')

const btn2 = document.querySelector('#btn-prod-detail-2')
const target2 = document.querySelector('#target-prod-detail-2')

const btn3 = document.querySelector('#btn-prod-detail-3')
const target3 = document.querySelector('#target-prod-detail-3')

const btn4 = document.querySelector('#btn-prod-detail-4')
const target4 = document.querySelector('#target-prod-detail-4')

accordion(btn1, target1)
accordion(btn2, target2)
accordion(btn3, target3)
accordion(btn4, target4)