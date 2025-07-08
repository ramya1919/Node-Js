// const http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.end('hello ramya');
// }).listen(4000)

const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello Rams');
});
server.listen(3000,()=>{
    console.log('server is running');
});