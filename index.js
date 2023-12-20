const http = require('http');
const packageJson = require('./package.json'); // Import the package.json file

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello, World!</h1>`);
  res.write(`<p>Version: ${packageJson.version}</p>`); // Display the version
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
