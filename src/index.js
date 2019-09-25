const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up at ' + port + '...');
});

const bcrypt = require('bcryptjs');

const myFunction = async () => {
  const password = 'Reds1234';
  const hashedPassword = await bcrypt.hash(password, 8);

  const isMatch = await bcrypt.compare('reds1234', hashedPassword);
};

myFunction();
