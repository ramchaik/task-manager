const calculateTip = (total, tipPercentage = 0.25) =>
  total + total * tipPercentage;

const fahrenheitToCelsius = temp => (temp - 32) / 1.8;

const celsiusToFarenheit = temp => temp * 32 + 32;

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFarenheit
};
