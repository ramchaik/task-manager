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

const multer = require('multer');
const upload = multer({
	dest: 'images',
	limits: {
		fileSize: 100000
	},
	fileFilter (req, file, cb) {
		if (!file.originalname.match(/\.(docx?)$/)) {
			cb(new Error('Please upload Word document'));
		}
		cb(undefined, true);
	}
});

app.post('/uploads', upload.single('uploads'), (req, res) => {
	res.send();
}, (error, req, res, next) => {
	res.status(400).send({ error: error.message });
})