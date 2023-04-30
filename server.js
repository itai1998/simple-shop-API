//imports the built-in http module, which provides functionality for creating and managing HTTP servers and clients.
const http = require('http'); 

//imports the contents of app module, which contains the definition of an Express application.
const app = require('./app');  

//sets its value to the value of the environment variable process.env.PORT, if it exists. Otherwise, it sets the port number to 3000
const port = process.env.PORT || 3000; 

//creates a new HTTP server using the createServer(). The app object will handle all incoming requests to the server.
const server = http.createServer(app); 

//When the server receives a request, it will call the app object to handle the request. 
server.listen(port);