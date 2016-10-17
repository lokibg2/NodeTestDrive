/**
 * Created by Appoyy on 17/10/16.
 */
'use strict'

// http Object
const http = require('http');

// File system object
const fs = require('fs');

// Read Config JSON File Synchronously
// const configJSON = fs.readFileSync('./config.json');


// Async Reading
fs.readFile('./config.json', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    // Parse JSON Object
    const config = JSON.parse(data);

// Express Object
    const express = require('express');

// app initialization
    const app = express();

// Initialize Server
    const httpServer = http.createServer(app);

// define static content directory location
    app.use(express.static(config.webServer.folderPath));


// Make Server Listen
    httpServer.listen(config.webServer.port, function (err) {
        // Listen Callback
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Server Started Successfully! Listening on port ${config.webServer.port}`);

    });
});

console.log('Reading Config...');
