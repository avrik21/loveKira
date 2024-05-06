let quality = document.getElementById('quality')
let img = document.getElementById('image')
let video = document.querySelector('video')

console.log(img)

var first = true;
document.onclick = function(){
  if(first == true) document.querySelector('audio').play()
  first = false;
}

quality.addEventListener('change', function () {
  console.log(quality.value)
  if(quality.value == '') {
    img.setAttribute('src', '')
    video.setAttribute('src', 'video/')
    document.querySelector('.container').classList.remove('active')

  }
  if(quality.value == '144p') {
    img.setAttribute('src', 'img/144p.jpg')
    video.setAttribute('src', 'video/')
    document.querySelector('.container').classList.remove('active')

  }
  if(quality.value == '240p') {
    img.setAttribute('src', 'img/240p.jpg')
    video.setAttribute('src', 'video/')
    document.querySelector('.container').classList.remove('active')

  }
  if(quality.value == '480p') {
    img.setAttribute('src', 'img/480p.jpg')
    video.setAttribute('src', 'video/')
    document.querySelector('.container').classList.remove('active')

  }
  if(quality.value == '720p') {
    img.setAttribute('src', 'img/720p.jpg')
    video.setAttribute('src', 'video/')
    document.querySelector('.container').classList.remove('active')

  }
  if(quality.value == '1080p') {
    img.setAttribute('src', '')
    video.setAttribute('src', 'video/video.mp4')
    document.querySelector('.container').classList.add('active')
  }
})
