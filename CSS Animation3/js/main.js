'use strict'
{
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');

  let timerId;

  function slide(){
    if(box1.classList.contains('in') && box3.classList.contains('out')===false){
      box1.classList.remove('in');
      box1.classList.add('out');
      box2.classList.add('in');
    }else if(box1.classList.contains('out') && box2.classList.contains('in')){
      box1.classList.remove('out');
      box2.classList.remove('in');
      box2.classList.add('out');
      box3.classList.add('in');
    }else if (box2.classList.contains('out') && box3.classList.contains('in')) {
      box1.classList.add('in');
      box2.classList.remove('out');
      box3.classList.remove('in');
      box3.classList.add('out');
    } else if (box3.classList.contains('out') && box1.classList.contains('in')) {
      box1.classList.remove('in');
      box1.classList.add('out');
      box2.classList.add('in');
      box3.classList.remove('out');
    }

    timerId = setTimeout(slide,3000);

  }

  start.addEventListener('click', () => {
    slide();
  });

  stop.addEventListener('click', () => {
    clearTimeout(timerId);
  });


}