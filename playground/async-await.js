const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) reject("number can't be negative.");
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  try {
    const sum = await add(1, -99);
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, -3);
    return sum3;
  } catch (error) {
    console.error('error', error);
  }
};

doWork()
  .then(res => {
    console.log('res', res);
  })
  .catch(e => console.error('e', e));
