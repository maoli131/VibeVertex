/**
 * main server file
 */

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello from the server');
});

app.get('/api/truth', (req, res) => {
	const data = {
		message: '你做过的最疯狂的事情是什么？'
	};
	res.json(data);
});

app.listen(PORT, () => {
	console.log('server listening on port ${PORT}');
});