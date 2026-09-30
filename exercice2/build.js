const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.html", "<h1>Exercice 2</h1>");

console.log("Build terminé");