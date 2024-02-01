function sum(x){    
    return new Promise((resolve, reject)=>{
        if( Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Ta de brincaderia')
        }
        //resolve
        setTimeout(()=>{
            resolve(x + 10);
        }, 3000);
    })    
}

async function main(){
    try {
        const resultado = await sum('#');
        console.log(`Resultado ${resultado}`)
    } catch (error) {
        console.log(`Falhou: ${error}`)        
    }    
}

main();