// Import the built-in 'http' module, which allows us to create an HTTP server
const http = require('http');

// Define the hostname for the server to listen on
// '127.0.0.1' is the local loopback address, also known as 'localhost'
const hostname = '127.0.0.1';

// Define the port number for the server to listen on
// Port 3000 is a common choice for development servers
const port = 3000;

// Create an HTTP server instance
// The function passed to 'http.createServer' will be called whenever the server receives a request
const server = http.createServer((req, res) => {
  // Set the status code of the response to 200
  // 200 is the standard status code for a successful HTTP request
  res.statusCode = 200;

  // Set the Content-Type header of the response to 'text/plain'
  // This header informs the client that the response body is plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body 'Hello World' and end the response
  // The '\n' adds a newline character to the end of the response
  res.end('Hello World\n');
});

// Start the server and have it listen for incoming requests on the specified hostname and port
// The function passed to 'server.listen' will be called once the server starts listening
server.listen(port, hostname, () => {
  // Log a message to the console indicating that the server is running and listening for requests
  console.log(`Server running at http://${hostname}:${port}/`);
});