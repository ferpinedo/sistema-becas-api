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
app.get('/becas/:_id', BecasHandler.getItemById);
app.post('/becas', BecasHandler.insertItem);
app.put('/becas/:_id', BecasHandler.updateItem);
app.delete('/becas/:_id', BecasHandler.deleteItem);