const interestBtn = document.getElementById("interestBtn");
const bmiBtn = document.getElementById("bmiBtn");
const calorieBtn = document.getElementById("calorieBtn");

interestBtn.addEventListener("click", calculateInterest);
bmiBtn.addEventListener("click", calculateBMI);
calorieBtn.addEventListener("click", calculateCalories);

/*------------------------------------------------------------ Interest Calculator */

function calculateInterest() {
  const principalAmount = Number(document.getElementById("principal").value);
  const interestRate = Number(document.getElementById("rate").value);
  const timePeriod = Number(document.getElementById("time").value);

  const resultContainer = document.getElementById("interestResult");

  if (principalAmount <= 0 || interestRate <= 0 || timePeriod <= 0) {
    resultContainer.innerHTML = `
      <div class="alert alert-danger">
        Enter valid values.
      </div>
    `;
    return;
  }

  const interestAmount = (principalAmount * interestRate * timePeriod) / 100;

  const totalAmount = principalAmount + interestAmount;

  resultContainer.innerHTML = `
    <div class="alert alert-primary">
      <p><strong>Interest:</strong> ₹${interestAmount.toFixed(2)}</p>
      <p class="mb-0"><strong>Total:</strong> ₹${totalAmount.toFixed(2)}</p>
    </div>
  `;
}

/* --------------------------------------------------------------------------BMI Calculator */

function calculateBMI() {
  const userHeight = Number(document.getElementById("height").value);
  const userWeight = Number(document.getElementById("weight").value);

  const bmiResultContainer = document.getElementById("bmiResult");

  if (userHeight <= 0 || userWeight <= 0) {
    bmiResultContainer.innerHTML = `
      <div class="alert alert-danger">
        Enter valid values.
      </div>
    `;
    return;
  }

  const bmi = userWeight / ((userHeight / 100) * (userHeight / 100));

  let category = "";
  let badgeClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    badgeClass = "bg-warning";
  } else if (bmi < 25) {
    category = "Normal";
    badgeClass = "bg-success";
  } else if (bmi < 30) {
    category = "Overweight";
    badgeClass = "bg-primary";
  } else {
    category = "Obese";
    badgeClass = "bg-danger";
  }

  bmiResultContainer.innerHTML = `
    <div class="alert alert-light border">
      <p><strong>BMI:</strong> ${bmi.toFixed(1)}</p>
      <span class="badge ${badgeClass}">
        ${category}
      </span>
    </div>
  `;
}

/* ----------------------------------------------------------------Calorie Calculator */

function calculateCalories() {
  const age = Number(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;

  const weight = Number(document.getElementById("calorieWeight").value);

  const height = Number(document.getElementById("calorieHeight").value);

  const activityLevel = Number(document.getElementById("activityLevel").value);

  const calorieResult = document.getElementById("calorieResult");

  if (age <= 0 || weight <= 0 || height <= 0 || !gender || !activityLevel) {
    calorieResult.innerHTML = `
      <div class="alert alert-danger">
        Fill all fields correctly.
      </div>
    `;
    return;
  }

  let bmr;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const dailyCalories = bmr * activityLevel;

  calorieResult.innerHTML = `
    <div class="alert alert-danger">
      <h5>Daily Calories</h5>
      <strong>${Math.round(dailyCalories)} kcal/day</strong>
    </div>
  `;
}

/* -------------------------------------------Reset Buttons */

document.getElementById("interestReset").addEventListener("click", () => {
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("time").value = "";
  document.getElementById("interestResult").innerHTML = "";
});

document.getElementById("bmiReset").addEventListener("click", () => {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmiResult").innerHTML = "";
});

document.getElementById("calorieReset").addEventListener("click", () => {
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("calorieWeight").value = "";
  document.getElementById("calorieHeight").value = "";
  document.getElementById("activityLevel").value = "";
  document.getElementById("calorieResult").innerHTML = "";
});
