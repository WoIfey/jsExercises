const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

function celToFar() {
  const output = (celsius.value * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
}

function fahToCel() {
  const output = ((fahrenheit.value - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
}
