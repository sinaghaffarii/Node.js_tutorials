//TCP => RabbitMQ, WebSocket, Kafka, gRPC, FileSystem
// let buff = Buffer.from("NodeJS");
let buff = Buffer.alloc(256);
buff.write("Nodejs");
buff[1] = 111;
console.log(buff);
console.log(buff[0]);
console.log("N".codePointAt(0));
console.log("N".charCodeAt(0));
console.log("N".codePointAt(0).toString(16));
console.log(buff.toString());

const buffer = Buffer.from("Sina");
console.log(buffer.toJSON());
console.log(typeof buffer);
const buff2 = Buffer.from([83, 105, 110, 97], "hex");
console.log(buff2.toString("utf-8"));


console.log("stream Hellow word")