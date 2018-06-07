const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const becasSchema = new Schema({
        claveBeca: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
        numControl: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
        fechaInicio: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
        fechaVencimiento: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
        estatus: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    }
    , {
        versionKey: false,
        collection: 'becas'
    });

const Becas = mongoose.model('Becas', becasSchema);

module.exports = Becas;