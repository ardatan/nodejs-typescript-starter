import { createServer } from 'http';

//create a server object:
createServer(function(req, res) {
  res.write('Hello World!\n'); //write a response to the client
  res.write(`User Agent: ${req.headers['user-agent']}`);
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
