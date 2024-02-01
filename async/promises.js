function soma(x){    
    return new Promise((resolve, reject)=>{
        //resolve
        setTimeout(()=>{
            resolve(x + 10);
        }, 3000);
    })    
}

soma(200)
    .then((resultado)=>{
        console.log(`Resolvido o resultado é : ${resultado}`);        
    })   