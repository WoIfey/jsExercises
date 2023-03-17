function calculateAge() {
  const result = document.getElementById("result");
  const dateInput = document.getElementById("date");

  const date = new Date(dateInput.value);
  const now = new Date();

  const yearNow = now.getFullYear();
  const monthNow = now.getMonth();
  const dayNow = now.getDate();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let age = yearNow - year;

  if (monthNow < month || (monthNow == month && dayNow < day)) {
    age--;
  }

  if (dateInput.value == null || dateInput.value == "") {
    result.innerText = "Insert a valid date.";
  } else if (age < 13) {
    result.innerText = `You are a child. (${age})`;
  } else if (age < 20) {
    result.innerText = `You are a teenager. (${age})`;
  } else if (age < 65) {
    result.innerText = `You are an adult. (${age})`;
  } else if (age < 101) {
    result.innerText = `You are a senior. (${age})`;
  }
}
