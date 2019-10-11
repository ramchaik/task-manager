require('../src/db/mongoose');
const User = require('../src/models/user');
/* 
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
 */
// Async version
const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, {
		age
	});
	const count = await User.countDocuments({
		age
	});
	return count;
};

updateAgeAndCount('5d79ad94d4c0f72fad9dbb92', 3)
	.then(count => {
		console.log(count);
	})
	.catch(e => console.error(e));