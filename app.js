let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');


let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;



startButton.addEventListener('click', function(){
  timer = true;
  stopWatch();
});

stopButton.addEventListener('click', function(){
  timer = false;
});

resetButton.addEventListener('click', function(){
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  document.querySelector('.milli').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
  document.querySelector('.minutes').innerHTML = '00';
  document.querySelector('.hours').innerHTML = '00';
});

function stopWatch(){
  if(timer){
    milliseconds++;

    if(milliseconds === 100){
      seconds++;
      milliseconds = 0;
    }

    if(seconds === 60){
      minutes++;
      seconds = 0;
    }

    if(minutes === 60){
      hours++;
      minutes = 0;
    }

    let hrString = hours;
    let minString = minutes;
    let secString = seconds;
    let milString = milliseconds;

    if(hrString < 10){
      hrString = '0' + hrString;
    }

    if(minString < 10){
      minString = '0' + minString;
    }

    if(secString < 10){
      secString = '0' + secString;
    }

    if(milString < 10){
      milString = '0' + milString;
    }

    document.querySelector('.hours').innerHTML = hrString;
    document.querySelector('.minutes').innerHTML = minString;
    document.querySelector('.seconds').innerHTML = secString;
    document.querySelector('.milli').innerHTML = milString;

    setTimeout(stopWatch,10);

    
  }

}