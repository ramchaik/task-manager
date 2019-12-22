const calculateTip = (total, tipPercentage = 0.25) =>
  total + total * tipPercentage;

const fahrenheitToCelsius = temp => (temp - 32) / 1.8;

const celsiusToFarenheit = temp => temp * 32 + 32;

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('NUmber should be non-negative');
      }

      resolve(a + b)
    }, 2000);
  });
}

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFarenheit,
  add
};
