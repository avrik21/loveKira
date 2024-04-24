window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header-language').addEventListener('click', function () {
      document.querySelector('.header-language__menu-list').classList.toggle('show')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger-menu-button').addEventListener('click', function () {
      document.querySelector('.header-inner').classList.toggle('open')
  })
})

let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.input__file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      document.querySelector('.input__file-text').innerText = 'файл выбран';
    else
      document.querySelector('.input__file-button-text').innerText = labelVal;
  });
});

