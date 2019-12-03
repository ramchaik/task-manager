// CRUD create read update delete
const {
	MongoClient,
	ObjectID
} = require('mongodb');

const connectionURL = process.env.MONGODB_URL;
const databaseName = 'task-manager';

MongoClient.connect(
	connectionURL, {
		useNewUrlParser: true
	},
	(error, client) => {
		if (error) {
			return 'Unable to connect to the database!';
		}

		const db = client.db(databaseName);

		/* db.collection('users')
			.updateOne(
				{
					_id: new ObjectID('5d6d06e1c8668561c9ab61a1')
				},
				{
					$inc: {
						age: -1
					}
				}
			)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.log(error);
			});

		db.collection('tasks')
			.updateMany(
				{ completed: false },
				{
					$set: {
						completed: true
					}
				}
			)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.log(error);
			});
	 */
		/* db.collection('users').deleteMany({
		age: 26
	}).then((res) => {
		console.log(res);
	}).catch((error) => {
		console.log(error);
	});
	 */
		db.collection('tasks')
			.deleteOne({
				description: 'Get groceries.'
			})
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.log(error);
			});
	}
);