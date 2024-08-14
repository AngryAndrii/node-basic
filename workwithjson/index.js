const fs = require("fs");

const data = fs.readFileSync("./base/text.json", { encoding: "utf-8" });
let dataObj = JSON.parse(data);
console.log(dataObj);
