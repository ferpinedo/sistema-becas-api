const mongoose = require('mongoose');

let Schema = mongoose.Schema;
const tipoBecaSchema = new Schema({
        claveBeca: {type: String, unique:true},
        nombre: String,
        descripcion: String,
        claveInstitucional: String,
        fecha: String
    },
    {
        versionKey: false // You should be aware of the outcome after set to false
    });

const TipoBeca = mongoose.model('tiposDeBecas', tipoBecaSchema);
module.exports = TipoBeca;
