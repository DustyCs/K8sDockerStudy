import express from 'express';
import fetch from 'node-fetch';
import os from 'os';

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    console.log(`Request served by ${os.hostname()}, Hello World!`);
    res.send(`Hello from ${os.hostname()}\n`);
});

app.get("/nginx", async (req, res) => {
    const response = await fetch('http://nginx');
    const body = await response.text();
    res.send(`Response from Nginx (via ${os.hostname()}):\n\n${body}`);
});

app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});

// stopped on 44 testing argocd