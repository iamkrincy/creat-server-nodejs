const http = require('http');

const port = 3000;

const fs = require('fs');

const RequestHandler = (req,res) =>{
    let fileName = '';
    switch (req.url){
        case '/':
            fileName = './index.html';
            break;

        case '/home':
              fileName = './home.html';
              break;

        case '/about':
            fileName = './about.html';
            break;

        case '/product':
            fileName = './product.html';
            break;
            
        case '/contact':
            fileName = './contact.html';
            break;
            
        default :
            fileName = './404.html';
            break;
    }

    fs.readFile(fileName , (err , data) =>{
        if(err){
            res.end('file not Found');
        }
        res.end(data);
    });
};

const server = http.createServer(RequestHandler);

server.listen(port,(err)=>{
if(!err){
    console.log("server is running");
    return false;
}
console.log(err);
})