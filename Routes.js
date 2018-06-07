//====LIST DEPENDENCIES===//

const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
var cors = require('cors');
const mongoose = require('mongoose');
const Becas = require('./models/becas.js');
const app = express();
const url = process.env.MONGOLAB_URI;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// const url = 'mongodb://localhost:27017/sistema-becas'; // Local

//=========================//

//====ROOT DIRECTORY===//

app.get('/', function(req, res) {
    res.json('you did it twice!!');
});

//==========================//

//====GET ALL SIGNATURES===//

app.get('/becas', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.set('Access-Control-Allow-Methods','GET,POST');
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type');

    Becas.find({}).then(eachOne => {
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
    Becas.create({
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