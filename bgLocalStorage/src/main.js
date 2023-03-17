import "/style.css";

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const rgbInput = document.getElementById("rgbInput");
const saveBtn = document.getElementById("saveColor");
const redTxt = document.getElementById("red")
const greenTxt = document.getElementById("green")
const blueTxt = document.getElementById("blue")
const cookieTray = document.querySelector("#cookieTray")

if (document.cookie == "") {
  cookieTray.style.display = "initial"
}
document.querySelector("#cookies").addEventListener("click", function () {
  cookieTray.style.display = "none"
  document.cookie = "cookies=accepted";
})

function changeColor() {
  let red = redInput.value;
  let green = greenInput.value;
  let blue = blueInput.value;
  redTxt.innerText = "Red (" + red + ")";
  greenTxt.innerText = "Green (" + green + ")";
  blueTxt.innerText = "Blue (" + blue + ")";
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = color;
  saveBtn.addEventListener("click", function () {
    localStorage.setItem("savedColor", color);
    localStorage.setItem("savedRed", red);
    localStorage.setItem("savedGreen", green);
    localStorage.setItem("savedBlue", blue);
    saveBtn.innerText = "✅";
    setInterval(() => {
      saveBtn.innerText = "Save Color";
    }, 1000);
  });
  rgbInput.innerText = color;
}

const savedRed = localStorage.getItem("savedRed");
const savedGreen = localStorage.getItem("savedGreen");
const savedBlue = localStorage.getItem("savedBlue");
const savedColor = localStorage.getItem("savedColor");

if (window.localStorage.length === 0) {
  rgbInput.innerText = "rgb(255,255,255)";
} else {
  redInput.value = savedRed;
  greenInput.value = savedGreen;
  blueInput.value = savedBlue;
  document.body.style.backgroundColor = savedColor;
  rgbInput.innerText = savedColor;
  redTxt.innerText = "Red (" + savedRed + ")"
  greenTxt.innerText = "Green (" + savedGreen + ")"
  blueTxt.innerText = "Blue (" + savedBlue + ")"
}

redInput.addEventListener("input", changeColor);
greenInput.addEventListener("input", changeColor);
blueInput.addEventListener("input", changeColor);
