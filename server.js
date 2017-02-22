const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const path = require('path');
const app = express();
const serverUrl = 'mongodb://admin:mu60d0usVO8UB9dGQrRk@ds043694.mlab.com:43694/hacker-news-tutorial';
let database;

MongoClient.connect(serverUrl, function(err, db) {
    if (err) {
        console.log(err);
        return false;
    }
    database = db;
    app.listen(8080, function() {
        console.log('Listen on 8080');
    })
});

/* send static files to server */
app.use('/bundle.js', express.static(path.join(__dirname, '/bundle.js')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'));
});