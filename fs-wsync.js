// arquivo não bloquiante 

const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5))
console.log("Antes  da leitura do arquivo")

const dados = fs.readFile("arquivo.txt", (err, data)=>{
    if(err) throw err;
    console.log("Terminou a leitura do arquivo")        
});

console.log("Executando o console após a leitura do arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));