const date = document.querySelector("#date");
const age = document.querySelector("#result");

date.addEventListener("change", () => {
  const result = computeAge(date.value);

  if (!date.value) {
    age.innerText = "Insert a valid date.";
  } else if (result.years < 0) {
    age.innerText = `You aren't even born! (${result.years}) 😮`;
  } else if (result.years < 13) {
    age.innerText = `You are a child. (${result.years}) 👶`;
  } else if (result.years < 20) {
    age.innerText = `You are a teenager. (${result.years}) 🧑‍🎓`;
  } else if (result.years < 65) {
    age.innerText = `You are an adult. (${result.years}) 👨‍💼`;
  } else if (result.years < 101) {
    age.innerText = `You are a senior. (${result.years}) 🧓`;
  } else {
    age.innerText = `Are you even alive?! (${result.years}) 💀`;
  }
});

/**
 * @param {string} dateOfBirth
 * @returns {{years: number, days: number}}
 */
function computeAge(dateOfBirth) {
  const now = new Date();
  const birtdate = new Date(dateOfBirth);

  if (
    now.getMonth() > birtdate.getMonth() ||
    (now.getMonth() === birtdate.getMonth() &&
      now.getDate() >= birtdate.getDate())
  ) {
    const thisYearBirtDate = new Date(
      `${now.getFullYear()}-${birtdate.getMonth() + 1}-${birtdate.getDate()}`
    );

    return {
      years: now.getFullYear() - birtdate.getFullYear(),
      days: Math.floor(
        (now.getTime() - thisYearBirtDate.getTime()) / (1000 * 60 * 60 * 24)
      ),
    };
  } else {
    const lastYearBirtDate = new Date(
      `${now.getFullYear() - 1}-${
        birtdate.getMonth() + 1
      }-${birtdate.getDate()}`
    );

    return {
      years: now.getFullYear() - birtdate.getFullYear() - 1,
      days: Math.floor(
        (now.getTime() - lastYearBirtDate.getTime()) / (1000 * 60 * 60 * 24)
      ),
    };
  }
}
