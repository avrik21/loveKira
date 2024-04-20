window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('open')
  })
})

const calculat = document.querySelectorAll('.calculat')
const us = document.querySelectorAll('.us')
const guarantees = document.querySelectorAll('.guarantees')
const reviewjs = document.querySelectorAll('.reviewjs')
const calculate = document.querySelector('.calculate')
const advantages = document.querySelector('.advantages')
const quality = document.querySelector('.quality-assurance')
const review = document.querySelector('.reviews')

calculat[0].addEventListener('click', function () {
  window.scrollTo({
    top: calculate.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})
calculat[1].addEventListener('click', function () {
  window.scrollTo({
    top: calculate.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})
us[0].addEventListener('click', function () {
  window.scrollTo({
    top: advantages.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})
us[1].addEventListener('click', function () {
  window.scrollTo({
    top: advantages.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})
guarantees[0].addEventListener('click', function () {
  window.scrollTo({
    top: quality.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})
guarantees[1].addEventListener('click', function () {
  window.scrollTo({
    top: quality.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})
reviewjs[0].addEventListener('click', function () {
  window.scrollTo({
    top: review.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})
reviewjs[1].addEventListener('click', function () {
  window.scrollTo({
    top: review.offsetTop,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
  })
})


const left = document.querySelector('.arrow-left')
const right = document.querySelector('.arrow-right')

console.log(left)

window.addEventListener('DOMContentLoaded', () => {
  slider()
});
window.addEventListener('resize', () => {
  slider()
});

function slider() {
  if (window.innerWidth > 1536  && window.innerWidth >= 1920) {

  let Y = 0;
  
  right.onclick = function () {
    Y = Y + 672
    if (Y >= 2700) Y = 0
    document.querySelector('.review-cards').style.right = Y + 'px'
  }
  left.onclick = function () {
    Y = Y - 672
    if (Y <= 0) Y = 2688  
    document.querySelector('.review-cards').style.right = Y + 'px'
  } 
  } else if (window.innerWidth > 1024  && window.innerWidth >= 1536) {
  
  let Y = 0;
  
  right.onclick = function () {
    Y = Y + 417
    if (Y >= 1670) Y = 0
    document.querySelector('.review-cards').style.right = Y + 'px'
  }
  left.onclick = function () {
    Y = Y - 417
    if (Y <= 0) Y = 1668
    document.querySelector('.review-cards').style.right = Y + 'px'
  } 
  } else if (window.innerWidth > 768  && window.innerWidth >= 1024) {
  
  let Y = 0;
  
  right.onclick = function () {
    Y = Y + 578
    if (Y >= 2320) Y = 0
    document.querySelector('.review-cards').style.right = Y + 'px'
  }
  left.onclick = function () {
    Y = Y - 578
    if (Y < 0) Y = 2312
    document.querySelector('.review-cards').style.right = Y + 'px'
  } 
  } else if (window.innerWidth > 500  && window.innerWidth >= 768) {
  
  let Y = 0;
  
  right.onclick = function () {
    Y = Y + 470
    if (Y >= 1881) Y = 0
    document.querySelector('.review-cards').style.right = Y + 'px'
  }
  left.onclick = function () {
    Y = Y - 470
    if (Y < 0) Y = 1880
    document.querySelector('.review-cards').style.right = Y + 'px'
  } 
  } else if (window.innerWidth <= 500) {
  
    let Y = 0;
    
    right.onclick = function () {
      Y = Y + 327
      if (Y >= 1310) Y = 0
      document.querySelector('.review-cards').style.right = Y + 'px'
    }
    left.onclick = function () {
      Y = Y - 327
      if (Y < 0) Y = 1308
      document.querySelector('.review-cards').style.right = Y + 'px'
    } 
  }
}

