const mongoose = require('mongoose');

let Schema = mongoose.Schema;
const estadoSchema = new Schema({
        clave: {type: Number, unique:true},
        nombre: String
    },
    {
        versionKey: false
    });

const Estado = mongoose.model('estados', estadoSchema);
module.exports = Estado;
