const { createWriteStream } = require("fs");
const WriteStream = createWriteStream("./stdin.txt");
process.stdin.pipe(WriteStream);
