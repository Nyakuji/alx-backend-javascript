const http = require('http');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

app.on('request', (_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
