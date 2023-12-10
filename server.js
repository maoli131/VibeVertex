/**
 * main server file
 * 
 * This handles the API calls and use either AI-engine or DB to
 * generate the trust/dare/game questions. 
 */

const express = require('express');
const cors = require('cors');
const { genTruthQuestions } = require('./ai_engine');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello from the server');
});

app.get('/api/truth', async (req, res) => {
	try {
		const questions = await genTruthQuestions(10); // Generate 10 truth questions
		res.json(questions);
		console.log(questions);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send('AI没想出来问题，请待会儿再试试。');
	}
});

app.get('/api/dare', (req, res) => {
	const data = {
		title: '大冒险',
		messages: ['做出一个你认为最性感的表情或动作。'],
	}
	res.json(data);
});

app.get('/api/game', (req, res) => {
	const data = {
		title: '逛三园',
		messages: ['星期天，逛三园，什么园'],
	}
	res.json(data);
});

app.listen(PORT, () => {
	console.log('server listening on port ${PORT}');
});