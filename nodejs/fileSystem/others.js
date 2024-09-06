const fs = require("fs");

// برای اضافه کردن دیتا به فایل هامون
fs.appendFile("write.txt", "new Data appened", "utf-8", (err) => {
  console.log(err);
});

fs.appendFileSync("write.txt", "\n new data appended with sync", "utf-8");

// برای این که چک کینم این فایل وجود دارد یا خیر
const checkExist = fs.existsSync("write.txt");

if (checkExist) {
  console.log(checkExist);
  //   برای پاک کردن فایل ازش استفاده میشود
  fs.unlink("write.txt", (err) => {
    if (err) console.log(err);
  });
} else {
  console.log("Not Found File");
}
