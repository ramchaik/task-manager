require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5d7693c295478e6c2e854790')
  .then(task => {
    return Task.countDocuments({ completed: false });
  })
  .then(count => {
    console.log(count);
  })
  .catch(err => console.log(err));
