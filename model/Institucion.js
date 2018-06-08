const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const institucionSchema = new Schema({
        claveInstitucional: {type: String, unique:true},
        nombre: String,
        direccion: String,
    },
    {
        versionKey: false // You should be aware of the outcome after set to false
    });

const Institucion = mongoose.model('instituciones', institucionSchema);
module.exports = Institucion;
