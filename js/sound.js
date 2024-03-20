window.onload = function () {

  let submitBtn = document.querySelector('.submitAudio');
  submitBtn.addEventListener('click', function(){
    let myAudio = document.querySelector('#audio');
    myAudio.play()
  })
  
}