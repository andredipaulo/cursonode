//funçao sincrona

function soma(x, callback){
    return setTimeout( ()=>{
        return callback(null, x + 10);
    },3000);
}

function resolveSoma(erro, resultado){
    if(erro) throw  erro;
    console.log(`O valor é ${resultado}`);
}

soma(200, resolveSoma);//vai demorar um pouco para mostrar o resultado