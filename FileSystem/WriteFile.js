const fs = require('fs');
fs.writeFile('file.txt','Hello Ramya', (err)=>{
    if(err){
        console.error(err);
        return
    }
    console.log('file written successfully');
});