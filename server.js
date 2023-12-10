/**
 * main server file
 * 
 * This handles the API calls and use either AI-engine or DB to
 * generate the trust/dare/game questions. 
 */

const express = require('express');
const cors = require('cors');
const { genTruthQuestions, genDareQuestions, genGameQuestions } = require('./ai_engine');

const app = express();
const PORT = process.env.PORT || 3001;

const onError = (error) => {
	console.error('Error:', error);
	res.status(500).send('AI没想出来问题，请待会儿再试试。');
}

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello from the server');
});

app.get('/api/truth', async (req, res) => {
	try {
		const questions = await genTruthQuestions(10);
		res.json(questions);
		console.log(questions);
	} catch (error) {
		onError(error);
	}
});

app.get('/api/dare', async (req, res) => {
	try {
		const questions = await genDareQuestions(10);
		res.json(questions);
		console.log(questions);
	} catch (error) {
		onError(error);
	}
});

app.get('/api/game', async (req, res) => {
	try {
		const questions = await genGameQuestions(10);
		res.json(questions);
		console.log(questions);
	} catch (error) {
		onError(error);
	}
});

app.listen(PORT, () => {
	console.log('server listening on port ${PORT}');
});