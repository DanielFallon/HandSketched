/**
 * Created by Daniel Fallon on 12/21/2016.
 */

import express = require('express');

let app = express();

app.get("/", function (req, res) {
    res.sendFile('index.html');
});

app.get(/^(.+)/)
