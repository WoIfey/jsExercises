const input = document.querySelector("input");
const text = document.querySelector("h1");

input.addEventListener("change", () => {
  const number = Number(input.value);

  if (number > 0) {
    text.innerText = `The number ${number} is positive`;
    text.style.color = "green";
    document.body.style.background = "lightgreen";
  } else if (number === 0) {
    text.innerText = "The number is zero";
    text.style.color = "blue";
    document.body.style.background = "lightblue";
  } else {
    text.innerText = `The number ${number} is negative`;
    text.style.color = "red";
    document.body.style.background = "darkred";
  }
});
