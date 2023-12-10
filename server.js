/**
 * main server file
 * 
 * This handles the API calls and use either AI-engine or DB to
 * generate the trust/dare/game questions. 
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
		title: '真心话',
		message: '你做过的最疯狂的事情是什么？'
	};
	res.json(data);
});

app.get('/api/dare', (req, res) => {
	const data = {
		title: '大冒险',
		message: '做出一个你认为最性感的表情或动作。'
	}
	res.json(data);
});

app.get('/api/game', (req, res) => {
	const data = {
		title: '逛三园',
		message: '星期天，逛三园，什么园'
	}
	res.json(data);
});

app.listen(PORT, () => {
	console.log('server listening on port ${PORT}');
});