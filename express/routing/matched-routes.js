const express = require("express");

const app = express();

// app.get("/file.txt", (req, res) => {
//   res.status(200).send({ Accepted: req.url });
// });

// app.get("/ab?cd", (req, res) => {
//   // acd , abcd
//   res.status(200).send({ Accepted: req.url });
// });

// app.get("/ab+cd", (req, res) => {
//   // abcd , abbcd, abbb(...nth)cd
//   res.status(200).send({ Accepted: req.url });
// });

// app.get("/ab*cd", (req, res) => {
//   // ab(alphabet-numric)cd => abfgikhasfogcd, abaqewrygcd
//   res.status(200).send({ Accepted: req.url });
// });

// app.get("/ab(cd)?e", (req, res) => {
//   // abcde , abe
//   res.status(200).send({ Accepted: req.url + " ab(cd)?e" });
// });

// app.get(/[a-z0-9_\.]{5,50}@[a-z]{2,6}\.[a-z]{2,10}/ig, (req, res) => {
//     res.status(200).send("Accepted: "+ req.url+"/[a-z0-9\.\_]@[a-z]{2,6}\.[a-z]{2,10}/")
// })

app.get(/.*nodejs$/, (req, res) => { // هرچیزی رو میتونه وارد کنه فقط آخرش باید nodejs باشه!
  res.status(200).send("Accepted: " + req.url + " /.*nodejs$");
});

app.listen(3000, () => {
  console.log("server run on port 3000");
});
