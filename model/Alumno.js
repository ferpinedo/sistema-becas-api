const mongoose = require('mongoose');

let Schema = mongoose.Schema;
const alumnoSchema = new Schema({
        numControl: {type: Number, unique:true},
        nombres: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        especialidad: Number,
        fechaNacimiento: String,
        correo: String,
        telefono: String,
        direccion: String,
        colonia: String,
        municipio: String,
        estado: String,
    },
    {
        versionKey: false
    });

const Alumno = mongoose.model('alumnos', alumnoSchema);
module.exports = Alumno;
