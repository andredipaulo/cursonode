const crypto = require("crypto");
const start = Date.now();

function logHashTime(){    
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", ()=>{
        console.log(`Hash time: ${Date.now() - start}ms`);
    })
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();