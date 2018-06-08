const mongoose = require('mongoose');

let Schema = mongoose.Schema;
const cuentaSchema = new Schema({
        nombre: String,
        cuenta: {type: String, unique:true},
        contraseña: String
    },
    {
        versionKey: false
    });

const Cuenta = mongoose.model('cuentas', cuentaSchema);
module.exports = Cuenta;
