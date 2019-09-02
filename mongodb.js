// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id, ' length -> ', id.id.length);
console.log(id.toHexString(), ' length -> ', id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return 'Unable to connect to the database!';
    }

    const db = client.db(databaseName);

    /* db.collection('users').insertOne({
      name: 'Vikram',
      age: 26
    }, (error, result) => {
      if (error) {
        return console.log('Unable to insert user.');
      }

      console.log(result.ops);
    }); */
    /* db.collection('users').insertMany([
    {
      name: 'Gen',
      age: 24
    }, {
      name: 'Gunther',
      age: 33
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert message');
    }

    console.log(result.ops);
  }); */

    /* db.collection('tasks').insertMany(
      [
        {
          description: 'Do laundry.',
          completed: true
        },
        {
          description: 'Get groceries.',
          completed: false
        },
        {
          description: 'Exercise.',
          completed: true
        }
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to add users');
        }

        console.log(result.ops);
      }
    ); */
  }
);
