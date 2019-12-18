const Medico = require("../models/Medico");
module.exports = {
    async store(req, res) {
        if (await Medico.findOne({ cpf: req.body.cpf })) {
            return res.status(400).json({ error: "Esse CPF já foi cadastrado" });
        }
        const medico = await Medico.create(req.body);
        return res.json(medico);
    },
    async list(req, res) {
        const medico = await Medico.find({});
        return res.json(medico);
    }
};
