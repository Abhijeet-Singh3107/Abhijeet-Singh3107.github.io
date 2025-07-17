import http from 'http'

const server = http.createServer((req,res) => {
    res.end("Good afternoon...");
})

server.listen(8082,() => {
    console.log("Server started on port: 8082");
})