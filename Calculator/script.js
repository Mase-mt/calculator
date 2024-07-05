let display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function calculateTip() {
  let billAmount = parseFloat(document.getElementById("billAmount").value);
  let tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    document.getElementById("tipResult").innerText =
      "Please enter valid numbers";
    return;
  }

  let tipAmount = billAmount * (tipPercentage / 100);
  let totalAmount = billAmount + tipAmount;

  document.getElementById("tipResult").innerText = `Tip: $${tipAmount.toFixed(
    2
  )}, Total: $${totalAmount.toFixed(2)}`;
}
