document.getElementById("throw").addEventListener("click", function () {
  let roll = Math.floor(Math.random() * 6) + 1;
  let dice = document.getElementById("dice");

  setTimeout(() => {
    document.getElementById("number").innerText = roll;
    dice.setAttribute("src", `dices/${roll}.png`);
  }, 1000);

  dice.classList = "throw";
  setTimeout(() => {
    dice.classList = "";
  }, 1000);
});
