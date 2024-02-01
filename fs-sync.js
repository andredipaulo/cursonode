// arquivo bloquiante 
// biblioteca nativa do node fs
// importar a biblioteca de arquivos e diretorios do NodeJS

const fs = require("fs");


console.log((process.hrtime()[0]/60).toFixed(5))
console.log("Antes  da leitura do arquivo")


const dados = fs.readFileSync("arquivo.txt")

console.log("Executando o console após a leitura do arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));