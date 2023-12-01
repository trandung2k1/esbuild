const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ result: 'Hi 123' });
});

app.get('/hello', (req, res) => {
    console.log(req.app);
    return res.status(200).json({ msg: 'Hello 123' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
