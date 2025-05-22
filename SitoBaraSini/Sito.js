var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("index.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/grafica.css") {
    fs.readFile("grafica.css", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write("404 Not Found");
    return res.end();
  }
}).listen(3000);

console.log("Server avviato su http://localhost:3000");

