let secondsLeft = 10;
const countdown = document.getElementById("countdown")
const tick = setInterval(function () {
  if (secondsLeft == 0) {
    clearInterval(tick);
    countdown.innerHTML = "Hej på dig!";
    countdown.style.color = "white";
    document.querySelector("body").style.background = "red";
  } else if (secondsLeft == 1) {
    countdown.innerHTML = secondsLeft + " sekund";
  } else {
    countdown.innerHTML = secondsLeft + " sekunder";
  }
  secondsLeft -= 1;
}, 1000);
