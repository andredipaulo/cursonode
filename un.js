const fs = require("fs")

console.log('iniciando');

//não bloqueantes Non Blocking
fs.readFile("arquivo.txt", (erro, dados)=>{
    if(erro) throw erro;
    console.log(dados)
    
    fs.unlink("arquivo.txt", (unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo deletado com sucesso!")
    })
});