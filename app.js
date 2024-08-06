const { stdin } = require('process');
const readline = require('readline');
const http = require('http');
const path = require('path');

const fs = require('fs');
const url= require('url')
const events = require('events')
const displayProductsOnTemplate = require('./modules/replace.module')
// This code is for reading the input from the user through console
// const rl= readline.Interface({
//     input : process.stdin,
//     output : process.stdout
// })


// rl.question("Enter your name: ", (name)=>{
//     console.log("You have entered "+name)
//     rl.close();
// })


// rl.on('close', ()=>{
//     console.log('Process and the interface has been terminated')
//     process.exit(0);
// })

const products = JSON.parse(fs.readFileSync('./products.json' , 'utf-8'));
const html = fs.readFileSync('./index.html', 'utf-8');
const productsPage = fs.readFileSync('./productlist.html', 'utf-8');
const productDetails = fs.readFileSync('./productDetails.html', 'utf-8')

   





// const server = http.createServer((request, response)=>{
//     let {query,pathname : path}= url.parse(request.url, true);
    
//     if(path === './' || path.toLocaleLowerCase() === '/home'){
//         response.writeHead(200);
//         response.end(html.replace('{{%CONTENT%}}', 'You are on the home page '));

//     }
//     else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200);

//         response.end(html.replace('{{%CONTENT%}}', 'You are on about page'));

//     }
//     else if( path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200);

//         response.end(html.replace('{{%CONTENT%}}', 'You are on contact page'));

//     }
//     else if (path.toLocaleLowerCase() === '/products'){
//         if (!(query.id)){
//             let productsArray  = products.map((prod)=>{
//                 return displayProductsOnTemplate(productsPage,prod);

//             })

//         response.writeHead(200, {'content-type' : 'text/html'});
//         response.end(html.replace('{{%CONTENT%}}',  productsArray.join('')));
//         }
//         else {
//             let prod = products[query.id]
//             let onclickProductDetails = displayProductsOnTemplate(productDetails,prod)
//             response.end(onclickProductDetails);
//         }
//     }
//     else {
//         response.writeHead(404);

//         response.end('Error 404 page not found ')
//     }
   
// })


 
const server = http.createServer();

server.listen(9000, '127.0.0.1', ()=>{
    console.log("Server has been created")
})

server.on('request', (request, response)=>{
    let {query,pathname : path}= url.parse(request.url, true);
    
    if(path === './' || path.toLocaleLowerCase() === '/home'){
        response.writeHead(200);
        response.end(html.replace('{{%CONTENT%}}', 'You are on the home page '));

    }
    else if(path.toLocaleLowerCase() === '/about'){
        response.writeHead(200);

        response.end(html.replace('{{%CONTENT%}}', 'You are on about page'));

    }
    else if( path.toLocaleLowerCase() === '/contact'){
        response.writeHead(200);

        response.end(html.replace('{{%CONTENT%}}', 'You are on contact page'));

    }
    else if (path.toLocaleLowerCase() === '/products'){
        if (!(query.id)){
            let productsArray  = products.map((prod)=>{
                return displayProductsOnTemplate(productsPage,prod);

            })

        response.writeHead(200, {'content-type' : 'text/html'});
        response.end(html.replace('{{%CONTENT%}}',  productsArray.join('')));
        }
        else {
            let prod = products[query.id]
            let onclickProductDetails = displayProductsOnTemplate(productDetails,prod)
            response.end(onclickProductDetails);
        }
    }
    else {
        response.writeHead(404);

        response.end('Error 404 page not found ')
    }
} )






let eventEmitter = new events.EventEmitter();

eventEmitter.on('User logged in',()=>{
    console.log("A new user is logged in")
})

eventEmitter.on('User logged in',()=>{
    
})

eventEmitter.emit('User logged in')
