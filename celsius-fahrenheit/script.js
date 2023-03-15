document.querySelector("#cButton").addEventListener("click", function () {
  const cInput = document.querySelector("#celcius").value;
  const fahrenheit = (cInput * 9) / 5 + 32;

  document.querySelector(
    "h1"
  ).innerText = `${cInput}°C is equal to ${fahrenheit}°F`;
});

document.querySelector("#fButton").addEventListener("click", function () {
  const fInput = document.querySelector("#fahrenheit").value;
  const celsius = ((fInput - 32) * 5) / 9;

  document.querySelector(
    "h1"
  ).innerText = `${fInput}°F is equal to ${celsius}°C`;
});
