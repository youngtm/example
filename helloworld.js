var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Where Kubernetes is a pleasure!');
});
server.listen(8080);
