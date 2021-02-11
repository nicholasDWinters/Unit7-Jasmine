window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountInput = document.getElementById('loan-amount');
  const yearsInput = document.getElementById('loan-years');
  const rateInput = document.getElementById('loan-rate');
  const values = { amount: 5000, years: 15, rate: 3.5 };
  amountInput.value = values.amount;
  yearsInput.value = values.years;
  rateInput.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(currentValues);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let amount = values.amount;
  let payments = values.years * 12;
  let rate = (values.rate / 100) / 12;

  let monthlyPayment = ((amount * (rate)) / (1 - (1 + (rate)) ** (-(payments)))).toFixed(2).toString();
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPaymentUI = document.getElementById('monthly-payment');
  monthlyPaymentUI.innerText = '$ ' + monthly;
}
