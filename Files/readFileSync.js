const fs = require('fs');

const fileContent = fs.readFileSync('./Files/exampleText.txt', 'utf-8');

console.log(fileContent);