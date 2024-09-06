const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Sina Ghaffari");
  })
  .listen(8585, () => {
    console.log("Server run on port 8585");
  });
