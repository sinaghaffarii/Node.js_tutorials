const fs = require("fs");

const folderAddress = "new-dir/test";
const checkExist = fs.existsSync(folderAddress);

// if (checkExist) {
//   console.log("this folder already exist");
// } else {
//   fs.mkdir("new-dir", (err) => {
//     if (err) console.log(err);
//   });
// }

fs.mkdir(folderAddress, { recursive: true }, (err) => {
  if (err) console.log(err);
});

fs.mkdirSync("new-dir1", { recursive: true });
// /-------------------------------------
// برای خوندن دایرکتوری ها از این دستور استفاده میکنیم
fs.readdir("./", (err, files) => {
  console.log(files);
});
