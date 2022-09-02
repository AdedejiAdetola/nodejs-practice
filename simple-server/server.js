const http = require('http');

const HOSTNAME = 'localhost';
const PORT = 8000;

function reqestHandler(req, res){
    console.log(req)
    res.write('What is my name? lol\n')
    res.end('Hello from the server!')
}
const server = http.createServer(reqestHandler);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started at http://${HOSTNAME}:${PORT}`)
})

