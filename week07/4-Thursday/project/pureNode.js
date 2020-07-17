const http = require ('http');



const server = http.createServer((req, res)=>{
    //all code to send response
    if(req.url === '/'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Hello World</h1>')
    res.end()
} 
else if (req.url === '/aboutus'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>node aboutus</h1>')
    res.end()
}
})

server.listen(5000);

console.log('im on 5000');