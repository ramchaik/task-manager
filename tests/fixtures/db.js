const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: 'Mike',
  email: 'mike@hike.com',
  password: 'mikeonhike',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: 'Vaibhav',
  email: 'vaibhav@ads.com',
  password: 'passsentence',
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }
  ]
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Task one',
  completed: false,
  owner: userOneId
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: 'Task two',
  completed: false,
  owner: userTwoId
};

const taskThree = {
  _id: mongoose.Types.ObjectId(),
  description: 'Task three',
  completed: true,
  owner: userOneId
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();

  await new User(userOne).save();
  await new User(userTwo).save();

  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOne,
  userOneId,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase
};
