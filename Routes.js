//====LIST DEPENDENCIES===//

const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
var cors = require('cors');
const mongoose = require('mongoose');
const Beca = require('./model/Becas.js');
const app = express();
const url = 'mongodb://fpinedo:Pinedo98@ds247830.mlab.com:47830/sistema-becas'

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

// const url = 'mongodb://localhost:27017/sistema-becas'; // Local

//=========================//

//====ROOT DIRECTORY===//

app.get('/', function(req, res) {
    res.json('you did it twice!!');
});

//==========================//

//====GET ALL SIGNATURES===//

app.get('/becas', function(req, res) {

    Beca.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

//==========================//

//====POST NEW SIGNATURE===//

app.post('/becas', function(req, res) {
    // console.log("Request: " + req + req.body);
    // console.log("Request: " + JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    Beca.create({
        numControl: req.body.numControl,
        claveBeca: req.body.claveBeca,
        fechaInicio: req.body.fechaInicio,
        fechaVencimiento: req.body.fechaVencimiento,
        estatus: req.body.estatus
    }).then(beca => {
        res.json(beca)
    });
});

//==========================//

//====MONGOOSE CONNECT===//

mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});

//==========================//

// process.env.PORT ||
app.listen( process.env.PORT || 3000, function () {
    console.log('Application Started!')
});