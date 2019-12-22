const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'Mike',
  email: 'mike@hike.com',
  password: 'mikeonhike'
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Vaibhav Singh',
      email: 'vaibhav@singh.com',
      password: 'nopass123'
    })
    .expect(201);
});

test('Should login existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});

test('Should not login nonexisting user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: 'blah@a.com',
      password: 'wrong_password'
    })
    .expect(400);
});
