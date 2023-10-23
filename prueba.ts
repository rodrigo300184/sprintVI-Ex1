const http = require('node:http');



const server = http.createServer((req,res) => {
    console.log('Server created')
    res.end('Hola, soy Skynet...todavia en desarrollo')
})

server.listen(3000,()=> {
    console.log('El server esta perreando')
})