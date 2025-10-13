import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    console.log(`Request served by ${os.hostname()}, Hello World!`);
    res.send(`Hello from ${os.hostname()}\n`);
});


app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});