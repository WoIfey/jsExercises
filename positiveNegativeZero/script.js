document.querySelector("input").addEventListener("change", () => {
  const number = document.querySelector("input").value;
  const text = document.querySelector("h1");

  if (number > 0) {
    text.innerText = "The number is positive";
    text.style.color = "green";
    document.body.style.background = "lightgreen";
  } else if (number == 0) {
    text.innerText = "The number is zero";
    text.style.color = "blue";
    document.body.style.background = "lightblue";
  } else {
    text.innerText = "The number is negative";
    text.style.color = "red";
    document.body.style.background = "darkred";
  }
});
