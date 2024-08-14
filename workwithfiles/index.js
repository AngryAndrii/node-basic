const fs = require("fs");

const path = "./base/info.txt";

const data = fs.readFileSync(path, { encoding: "utf-8", flag: "r" });
let dataArr = data.split("\r\n");
dataArr = dataArr.filter((line) => line.trim() !== "");
console.log(dataArr);
