const http = require('http');

const HOST = 'localhost';
const PORT = 1245;

const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}\n`);
});

module.exports = app;
