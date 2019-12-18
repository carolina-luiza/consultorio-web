const Atendimento = require("../models/Atendimento");
const Medico = require("../models/Medico");
module.exports = {
    async store(req, res) {

        const atendimento = await Atendimento.create(req.body);
        return res.json(atendimento);
    },

    async index(req, res) {
        const atendimento = await Atendimento.find({}).populate('medico');

        return res.json(atendimento);
    },

    async list(req, res) {
        const atendimento = await Atendimento.find({});
        return res.json(atendimento);
    }
};