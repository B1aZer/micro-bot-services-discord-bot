let fs = require("fs");
let normalizedPath = require("path").join(__dirname, "../commands");

let filePaths = [];
fs.readdirSync(normalizedPath).filter(file => file.endsWith('js') && file !== 'help.js').forEach(function(file) {
  filePaths.push(`module.exports.${file.split('.')[0]} = require("../${file}");`);
});

fs.writeFileSync(`${normalizedPath}/bundle/main.js`, filePaths.join('\r\n'));