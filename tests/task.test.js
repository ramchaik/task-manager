const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');
const User = require('../src/models/user');
const { userOne, taskTwo, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task for user', async () => {
  const response = await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: 'Bake a Cake.'
    })
    .expect(201);

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test('Should fetch user tasks', async () => {
  const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toEqual(2);
});

test('Should not delete other users tasks', async () => {
  await request(app)
    .delete(`/tasks/${taskTwo._id}`)
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(404);

  const task = await Task.findById(taskTwo._id);
  expect(task).not.toBeNull();
});

// https://gist.github.com/andrewjmead/988d5965c609a641202600b073e54266 // for more test cases