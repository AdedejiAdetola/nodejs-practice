const http = require('http');
const fs = require('fs');
const path = require('path');
const { equal } = require('assert');

const booksDBPath = path.join(__dirname, 'db', 'books.json');

const PORT = 4000;
const HOSTNAME = 'localhost';

const requestHandler = (req, res) => {
    if(req.url === '/books' && req.method === 'GET'){
        //get all data
        getAllBooks(req, res)
    } else if (req.url === '/books' && equal.method === 'POST'){
        //POST
    } else if (req.url === '/books' && equal.method === 'PUT'){
        //PUT
    } else if (req.url === '/books' && equal.method === 'DELETE'){

    }
}
//create server

const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    booksDB = JSON.parse(fs.readFileSync(booksDBPath, 'utf8'));
    console.log(`Server is starting at http://${HOSTNAME}:${PORT}`)
})

//GET ALL DATA FUNCTION
function getAllBooks(req, res){
    fs.readFile(booksDBPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.writeHead(400)
            res.end('A error occured while getting the file')
        }
        res.end(data)
    })
}

