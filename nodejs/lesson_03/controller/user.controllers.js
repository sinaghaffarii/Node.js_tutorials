const { userModel } = require("../model/user.models");

async function get(req, res) {
  try {
    const users = await userModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function getById(req, res) {
  try {
    const id = req.url.split("/")[3];
    const user = await userModel.findById(id);
    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Not Found Any User" }));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(user));
      res.end();
    }
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const user = { id: Date.now(), ...JSON.parse(body) };
      const result = await userModel.create(user);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    });
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    let body = "";
    const id = req.url.split("/")[3];
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const parseBody = { ...JSON.parse(body) };
      const user = await userModel.findById(id);
      if (!user) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Not Found Any User" }));
        res.end();
      } else {
        const result = await userModel.update(id, parseBody);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
  try {
    let body = "";
    const id = req.url.split("/")[3];
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const user = await userModel.findById(id);
      if (!user) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Not Found Any User" }));
        res.end();
      } else {
        const result = await userModel.remove(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

const userController = {
  get,
  getById,
  create,
  update,
  remove
};

module.exports = {
  userController,
};
