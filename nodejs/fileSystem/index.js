const fs = require("fs");
// non blocking
console.log("first log")
fs.readFile("package.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
console.log("second log")



// blocking
console.log("first log")
const data = fs.readFileSync("package.json", "utf-8");
console.log(data);
console.log("second log")