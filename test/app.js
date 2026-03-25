const http = require('http');
const os = require('os');
var handler = function(request, response) {
  response.writeHead(200);
  response.end("Merhaba Dunya! Server: " + os.hostname());
};
var www = http.createServer(handler);
www.listen(8080);
