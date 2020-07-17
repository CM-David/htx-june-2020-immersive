
const http = require('http');

//create server

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'content-type': 'text/html'});

    res.write('<h1>Hello World!</h1>');

    res.end();

})


//listen for requests'


server.listen(5000)

console.log('node.js web is running port 5000'); 