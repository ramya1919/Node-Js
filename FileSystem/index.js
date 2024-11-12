const http=require('http')
const fs=require('fs')
const port=5000;
const path=require('path')
const filePath=path.join(__dirname,'file.txt')
const server=http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url == '/'){
        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('error reading file');
                return;
            }
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end(data);
        })
    }
})
server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})