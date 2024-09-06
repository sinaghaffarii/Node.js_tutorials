const fs = require("fs");

// flag: "a" فلگ a یعنی append کردن منطورمون اینه که دیتای جدید رو جایگزین نکن این رو بهش اضافه کن

let data = "Hello World\n";
fs.writeFile("write.txt", data, { flag: "a", encoding: "utf-8" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("write in file done!");
  }
});
