const http = require("http");
const user = require("./data/products.json");
const PORT = 8585;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    res.writeHead(200, { "Content_Type": "application/json" });
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.writeHead(404, { "Content_Type": "application/json" });
    res.write(JSON.stringify({
      message: "This Route Not Found!!",
    }));
    res.end();
  }
});

server.listen(PORT);
console.log("Server On the this Port: " + PORT + " http://localhost:" + PORT);
