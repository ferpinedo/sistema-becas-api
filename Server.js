const express = require('express');
const app = express();

const mongoose = require('mongoose');
let database = require('./config/database');
let BecasHandler = require('./api-handler/BecasHandler');
let bodyParser = require('body-parser');         // pull information from HTML POST (express4)
let methodOverride = require('method-override');

const port = process.env.PORT || 5656;

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


mongoose.connect(database.url);

app.listen(port);
console.log("App listening on port : " + port);

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
    res.json('You are using \"sistema-becas-API\".');
});


app.get('/becas', BecasHandler.getAllItems);

// get a beca with specific ID
app.get('/becas/:_id', function(req, res) {
    console.log("getting a beca with specific ID: " + req.params._id);
    let id = req.params._id;
    Beca.findById(id, function(err, beca) {
        if (err){
            console.log(err.toString());
            res.send(err.toString());
        }
        res.json(beca);
    });
});

// create beca
app.post('/becas', function(req, res) {
    // create mongose method to create a new record into collection
    console.log("Pushing to becas: " + req.body);
    Beca.create({
        claveBeca : req.body.claveBeca,
        numControl: req.body.numControl,
        fechaInicio: req.body.fechaInicio,
        fechaVencimiento: req.body.fechaVencimiento,
        estatus: req.body.estatus
    }, function(err, beca) {
        if (err){
            console.log(err.toString());
            res.send(err.toString());
        }
        // get and return all the employees after newly created employe record
        Beca.find(function(err, becas) {
            if (err) {
                console.log(err.toString());
                res.send(err.toString());
            }
            res.json(becas);
        });
    });
});

// update beca
app.put('/becas/:_id', function(req, res) {
    console.log("Updating becas");
    // create mongose method to update a existing record into collection
    let id = req.params._id;
    let data = {
        claveBeca : req.body.claveBeca,
        numControl: req.body.numControl,
        fechaInicio: req.body.fechaInicio,
        fechaVencimiento: req.body.fechaVencimiento,
        estatus: req.body.estatus
    };

    // save the beca
    Beca.findByIdAndUpdate(id, data, function(err, beca) {
        if (err){
            console.log(err.toString());
            res.send(err.toString());
        }else{
            res.send('Successfully! Beca updated - ' + beca.claveBeca);
        }
    });
});

// delete a beca by id
app.delete('/becas/:_id', function(req, res) {
    console.log(req.params._id);
    let id = req.params._id;
    Beca.remove({
        _id : id
    }, function(err) {
        if (err) {
            console.log(err.toString());
            res.send(err.toString());
        }
        else
            res.send('Successfully! Employee has been Deleted.');
    });
});