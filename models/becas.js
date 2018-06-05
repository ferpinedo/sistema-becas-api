const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const becasSchema = new Schema({
    becas: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    message: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
})

const Becas = mongoose.model('Becas', becasSchema);

module.exports = Becas;