const fs = require('fs');
fs.readFile('file.txt','utf-8', (err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
});