const express = require("express");
const users = [
  { id: 1, username: "user1" },
  { id: 2, username: "user2" },
  { id: 3, username: "user3" },
];
const products = [
  { id: 1, productName: "product1" },
  { id: 2, productName: "product2" },
  { id: 3, productName: "product3" },
];
const app = express();

app.get("/", (req, res) => {
  console.log("Welcome to route...");

  //   res.send("hello expressJS");
  //   res.send("<h1>hello expressJS</h1>");
  res.send({ message: "hello expressJS" });
});

app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.json({
    users,
  });
});

app.get("/products/:id?", (req, res) => {
  res.statusCode = 200;
  const { id } = req.params;
  let product = null;
  if (id) {
    product = products.find((product) => product.id == id);
    return res.send({
      statusCode: res.statusCode,
      data: {
        product,
      },
    });
  }
  res.json({
    products,
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    res.status(404).send({
      statusCode: res.statusCode,
      error: {
        message: "User Not Fount",
      },
    });
  } else {
    res.status(200).send({
      statusCode: res.statusCode,
      data: {
        user,
        date: new Date(),
      },
    });
  }
});

app.get("/stuff/:id/:username/:version/:stuffID", (req, res) => {
  res.send(req.params);
});

app.listen(3000, () => {
  console.log("server run on port 3000");
});
