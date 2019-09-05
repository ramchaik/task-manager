// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return 'Unable to connect to the database!';
    }

    const db = client.db(databaseName);

    /* db.collection('users').findOne(
      { _id: new ObjectID('5d6d245786f2073853e42543') },
      (error, user) => {
        if (error) {
          return console.log('Unable to fetch');
        }

        console.log(user);
      }
    ); */

    /*  db.collection('users')
      .find({ age: 23 })
      .toArray((error, users) => {
        if (error) {
          return console.log('Unable to fetch users.');
        }
        console.log(users);
      });

    db.collection('users')
      .find({ age: 23 })
      .count((error, count) => {
        if (error) {
          return console.log('Unable to fetch.');
        }
        console.log(count);
      }); */
    db.collection('tasks').findOne(
      { _id: new ObjectID('5d6d1fac50ce6c293aff2888') },
      (error, task) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log('task-->', task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log('tasks -->', tasks);
      });
  }
);
