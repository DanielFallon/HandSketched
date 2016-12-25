/** Startup script for the server in development */

let http = require('http');

http.createServer((req,resp) => {
    resp.write("hello world");
})
    .listen(8080);

console.log("the server is running");
