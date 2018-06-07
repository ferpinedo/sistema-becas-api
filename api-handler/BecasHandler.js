let Beca = require('../model/Beca');


// get all becas
function getAllItems(req, res) {
    // use mongoose to get all todos in the database
    Beca.find(function(err, becas) {
        // if there is an error retrieving, send the error otherwise send data
        if (err){
            console.log(err.toString());
            res.send(err.toString());
        }
        res.json(becas); // return all employees in JSON format
    });
}

// get a beca with specific ID
function getItemById(req, res) {
    console.log("getting a beca with specific ID: " + req.params._id);
    let id = req.params._id;
    Beca.findById(id, function(err, beca) {
        if (err){
            console.log(err.toString());
            res.send(err.toString());
        }
        res.json(beca);
    });
}

// create beca
function insertItem(req, res) {
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
}

// update beca
function updateItem(req, res) {
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
}

// delete a beca by id
function deleteItem(req, res) {
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
}

module.exports = {
    insertItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
};