const inputElement = document.querySelector("#date");
const divElement = document.querySelector("#result");

inputElement.addEventListener("change", () => {
  const result = computeAge(inputElement.value);
  divElement.innerHTML = `
    ${result.years} years and ${result.days} days old
  `;
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
