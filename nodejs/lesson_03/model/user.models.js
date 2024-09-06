const users = require("../data/users.json");
const fs = require("fs");

async function find() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(users.find((user) => user.id == id));
  });
}

async function create(user) {
  return new Promise((resolve, reject) => {
    users.push(user);
    fs.writeFile(
      `${process.cwd()}/data/users.json`,
      JSON.stringify(users),
      (err) => {
        if (err) reject(err);
        else resolve({ message: "new user created", data: user });
      }
    );
  });
}

async function update(id, payload) {
  return new Promise((resolve, reject) => {
    users.map((user) => {
      if (user.id == id) {
        Object.assign(user, payload);
      }
      return user;
    });
    fs.writeFile(
      `${process.cwd()}/data/users.json`,
      JSON.stringify(users),
      (err) => {
        if (err) reject(err);
        else resolve({ message: "user update successfully!" });
      }
    );
  });
}

async function remove(id) {
  return new Promise((resolve, reject) => {
    const newList = users.filter((user) => user.id != id);
    fs.writeFile(
      `${process.cwd()}/data/users.json`,
      JSON.stringify(newList),
      (err) => {
        if (err) reject(err);
        else resolve({ message: "User Delete successfully!" });
      }
    );
  });
}

const userModel = {
  find,
  findById,
  create,
  update,
  remove,
};

module.exports = {
  userModel,
};
