const fs = require("fs");

const text = "lololllll lllllll ojijij nkjkllb \r\n- fefefe fdfdfdf \r\n";

const path = "./base/new.txt";

fs.writeFileSync(path, text, { encoding: "utf-8", flag: "w" });
