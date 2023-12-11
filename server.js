/**
 * main server file
 * 
 * This handles the API calls and use either AI-engine or DB to
 * generate the trust/dare/game questions. 
 */

require('dotenv').config()

const express = require('express');
const cors = require('cors');
const path = require('path');
const { genTruthIdeas, genDareIdeas, genGameIdeas } = require('./ai_engine');
const { fetchIdeas } = require('./data_engine');

const app = express();
const PORT = process.env.PORT || 3001;
const useAI = true;
const NUM_IDEADS = 10;

// Server initialization: middle ware
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});

// Main functions
async function handleIdeaRequest(req, res, fetchIdeas, genIdeas) {
	let ideas = null;
	try {
		if (useAI) {
			console.log('generating ideas');
			ideas = await genIdeas(NUM_IDEADS);
		} else {
			console.log('fetching ideas');
			ideas = await fetchIdeas(NUM_IDEADS);
		}
	} catch (error) {
		onError(error);
	}
	console.log(ideas);
	res.json(ideas);
}

// error handling
const onError = (error) => {
	console.error('Error:', error);
	res.status(500).send('AI没想出来问题，请待会儿再试试。');
}

// API definitions
app.get('/api/truth', async (req, res) =>
	handleIdeaRequest(req, res, fetchIdeas, genTruthIdeas)
);

app.get('/api/dare', async (req, res) =>
	handleIdeaRequest(req, res, fetchIdeas, genDareIdeas)
);

app.get('/api/game', async (req, res) =>
	handleIdeaRequest(req, res, fetchIdeas, genGameIdeas)
);

// [catch all] Serve static React frontend
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
