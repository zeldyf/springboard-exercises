window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
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
  const initialValues = { amount: 10000, years: 20, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = initialValues.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = initialValues.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = initialValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const input = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(input));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const periodicRate = (values.rate / 100 ) / 12;
  const numberOfPayments = values.years * 12;
  return ((values.amount * periodicRate) / (1 - (1 + periodicRate) ** -numberOfPayments)).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.getElementById("monthly-payment");
  monthlyPaymentUI.innerText = "$" + monthly
}

