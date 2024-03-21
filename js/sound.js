window.onload = function () {
  let submitBtns = document.querySelectorAll('.submitAudio');
  submitBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event){
      event.preventDefault();
      let myAudio = document.querySelector('#audio');
      myAudio.play();
    });
  });
}
