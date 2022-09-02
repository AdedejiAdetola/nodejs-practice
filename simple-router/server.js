const http = require('http');

const { authors, books } = require('./fixtures');
const PORT = 4000;
const HOSTNAME = 'localhost';

function requestHandler(req,res){
    switch(req.url){
        case '/books':
            res.writeHead(200)
            res.end(JSON.stringify(books))
            break
        case '/authors':
            res.writeHead(200)
            res.end(JSON.stringify(authors))
            break
        default:
            res.writeHead(404)
            res.end('Route not supported')
            break
    }
}
const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`)
})