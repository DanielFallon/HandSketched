/** Startup script for the server in development */

import path = require('path');
import express = require('express');
let prodServer = require('./server');
console.log("Starting server");
const app = express();

if(process.env.NODE_ENV !== 'production'){

}else{
    console.log("Running in production mode");
}
prodServer(app);

console.log("start listening");
app.listen(3000, () => {
    console.log("Listening on port 3000.")
});
