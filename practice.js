
let http = require('http');
const { stdin } = require('process');
let url= require('url')
let fs = require('fs');


let html = fs.readFileSync('/index.html', 'utf-8');
const server = http.createServer((request,response)=>{
    let path = request.url

    if(path === '/' || path === '/home'){
        response.end(html)
    }
    else {
        response.end("This is from the else block ")
    }
})


server.listen(3001,'127.0.0.2',()=>{
    console.log("Server has started!");
})