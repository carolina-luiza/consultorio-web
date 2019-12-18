const { Schema, model } = require("mongoose");

const AtendimentoSchema = new Schema({
    medico: {
        type: Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    },
    dia: {
        default: "Dia do Atendimento",
        type: Date,
        required: true
    },
    valor: {
        default: "Valor de Atendimento",
        type: Number,
        required: true
    },
    tipodeatendimento: {
        default: "Tipo de Atendimento",
        type: String,
        required: true
    },

}, {
    timestamps: true
});
module.exports = model("Atendimento", AtendimentoSchema);