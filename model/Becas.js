const mongoose = require('mongoose');

let Schema = mongoose.Schema;
const becasSchema = new Schema({
        claveBeca: {type: String, unique:false},
        numControl: Number,
        fechaInicio: String,
        fechaVencimiento: String,
        estatus: Boolean
    },
    {
        versionKey: false // You should be aware of the outcome after set to false
    });

const Beca = mongoose.model('becas', becasSchema);
module.exports = Beca;
