
var self = null;

class Handler{
    constructor(Schema)
    {
        this.Schema = Schema;
        self = this;
    }

// get all items
    getAllItems(req, res) {
        // use mongoose to get all todos in the database
        self.Schema.find(function(err, items) {
            // if there is an error retrieving, send the error otherwise send data
            if (err){
                console.log(err.toString());
                res.send(err.toString());
            }
            res.json(items); // return all employees in JSON format
        });
    }

// get an item with specific ID
    getItemById(req, res) {
        console.log("getting an item with specific ID: " + req.params._id);
        let id = req.params._id;
        self.Schema.findById(id, function(err, item) {
            if (err){
                console.log(err.toString());
                res.send(err.toString());
            }
            res.json(item);
        });
    }

// create an item
    insertItem(req, res) {
        // create mongose method to create a new record into collection
        console.log("Pushing to table: " + req.body);
        self.Schema.create(self.createBody(req.body),
            function(err, item) {
            if (err){
                console.log(err.toString());
                res.send(err.toString());
            }
            // get and return all the employees after newly created employe record
            self.Schema.find(function(err, item) {
                if (err) {
                    console.log(err.toString());
                    res.send(err.toString());
                }
                res.json(item);
            });
        });
    }

// update an item
    updateItem(req, res) {
        console.log("Updating item");
        // create mongose method to update a existing record into collection
        let id = req.params._id;
        let data = self.createBody(req.body);

        // save the items
        self.Schema.findByIdAndUpdate(id, data, function(err, item) {
            if (err){
                console.log(err.toString());
                res.send(err.toString());
            }else{
                res.send('Successfully! Beca updated - ' + item.claveBeca);
            }
        });
    }

// delete an item by id
    deleteItem(req, res) {
        console.log(req.params._id);
        let id = req.params._id;
        self.Schema.remove({
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

    createBody(reqBody){
        let data = {};
        Object.keys(reqBody).forEach(key => {
            console.log("Key: " + key);
            data[key] = reqBody[key];
        });
        return data;
    }
    
}

module.exports = Handler;