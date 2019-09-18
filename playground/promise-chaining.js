require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5d79ad94d4c0f72fad9dbb92', { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(count => {
    console.log(count);
  })
  .catch(err => {
    console.error(err);
  });
