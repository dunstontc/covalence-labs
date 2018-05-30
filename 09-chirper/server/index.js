var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var clientPath = path.join(__dirname, "../client");

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  
  if(parsedUrl.pathname =="/") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(path.join(clientPath, "index.html"), function(err, data) {
      res.end(data);  
    });
  } else if(parsedUrl.pathname == "/api/chirps") {
    res.writeHead(200, {"Content-Type": "application/json"});
    fs.readFile(path.join(clientPath, "index.html"), function(err, data) {
      if(err) {
        res.writeHead(404, "Error; Could not load the file data.json");
      }
      console.log(data);
      res.end(data);  
    });
  } else if (req.method == "POST") {
      varChirp = " ";

      req.on('on', function(data) {
        newChirp += data;
      });
      
      fs.readFile(path.join(__dirname, "data.json"), "utf8", function (err, data){
          if(err) {
            res.writeHead(404, "Error; Could not load the file data.json");
          } else {
            var allChirps = JSON.parse(data);
          }
      });
  };
});
server.listen(3000);