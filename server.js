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
		message: 'This is truth from the backend.'
	};
	res.json(data);
});

app.listen(PORT, () => {
	console.log('server listening on port ${PORT}');
});