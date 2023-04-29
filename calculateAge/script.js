const date = document.querySelector("#date");
const age = document.querySelector("#result");

date.addEventListener("change", () => {
  const result = computeAge(date.value);
  if (!date.value) {
    age.innerText = "Insert a valid date.";
  } else {
    const { years, days } = result;
    let message = `${years} ${years === 1 ? "year" : "years"} and ${days} ${
      days === 1 ? "day" : "days"
    } old`;
    age.innerText = message;
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
