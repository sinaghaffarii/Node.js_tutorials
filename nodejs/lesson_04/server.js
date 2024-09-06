const http = require("http");
const { userController } = require("./controller/user.controllers");
const ErrorHandler = require("./controller/ErrorHandler.controller");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const apiRoute = "api";
  const usersRoute = `/${apiRoute}/users`;
  const singleUserRoute = /\/api\/users\/[0-9]+/;
  const { url, method } = req;
  if (url === usersRoute && method == "GET") {
    userController.get(req, res);
  } else if (url.match(singleUserRoute) && method == "GET") {
    userController.getById(req, res);
  } else if (url == usersRoute && method == "POST") {
    userController.create(req, res);
  } else if (url.match(singleUserRoute) && method == "PUT") {
    userController.update(req, res);
  } else if (url.match(singleUserRoute) && method == "DELETE") {
    userController.remove(req, res);
  } else {
    ErrorHandler.NotFound(res);
  }
});

server.listen(PORT);
console.log(`Server run on port ${PORT} _ http://localhost:${PORT}`);
