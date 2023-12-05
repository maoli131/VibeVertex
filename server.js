/**
 * main server file
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.listen(PORT, () => {
    console.log('server listening on port ${PORT}');
});