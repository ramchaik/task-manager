require('../src/db/mongoose');
const Task = require('../src/models/task');

/* Task.findByIdAndDelete('5d7693c295478e6c2e854790')
  .then(task => {
    return Task.countDocuments({ completed: false });
  })
  .then(count => {
    console.log(count);
  })
  .catch(err => console.log(err)); */

const deleteAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteAndCount('5d804590edb17f0bb1ef19b9')
  .then(count => {
    console.log(count);
  })
  .catch(e => console.error(e));
