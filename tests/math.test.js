const {
  calculateTip,
  celsiusToFarenheit,
  fahrenheitToCelsius,
  add
} = require('../src/math');

test('Should calculate total with tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test('Should calculate toatal with default tip', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test('Should convert 32 F to 0 C', () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test('Should convert 0 C to 32 F', () => {
  const temp = celsiusToFarenheit(0);
  expect(temp).toBe(32);
});

test('async test using done', done => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  });
});

test('async test using promise', done => {
  add(2, 3).then(sum => {
    expect(sum).toBe(5);
    done();
  });
});

test('async test using async/await', async () => {
  const sum = await add(10, 3);
  expect(sum).toBe(13);
});
