let secondsLeft = 10;
const countdown = document.getElementById("countdown");
const tick = setInterval(function () {
  if (secondsLeft == 0) {
    clearInterval(tick);
    countdown.innerHTML = "Hello to you!";
    countdown.style.color = "white";
    document.querySelector("body").style.background = "red";
  } else if (secondsLeft == 1) {
    countdown.innerHTML = secondsLeft + " second";
  } else {
    countdown.innerHTML = secondsLeft + " seconds";
  }
  secondsLeft -= 1;
}, 1000);
