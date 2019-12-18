const { Schema, model } = require("mongoose");

const MedicoSchema = new Schema({
        nome: {
            default: "Nome",
            type: String,
            required: true
        },
        cpf: {
            default: "CPF",
            type: Number,
            unique: true,
            required: true
        },
        especializacao: {
            default: "Especialização",
            type: String,
            required: true
        },
        telefone: {
            default: "Número de Telefone",
            type: Number,
            required: true
        },
        diadeatendimento: {
            default: "Dia de Atendimento",
            type: String,
            required: true
        },
    },

    {
        timestamps: true
    }
);
module.exports = model("Medico", MedicoSchema);