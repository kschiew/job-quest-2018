const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 8080;
const app = express();

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>Test server</h1></body>')
});

const sample_server = http.createServer(app);

sample_server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});
