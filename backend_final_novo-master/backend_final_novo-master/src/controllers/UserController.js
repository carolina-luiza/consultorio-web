const Usuario = require("../models/Usuario");
module.exports = {

    async store(req, res) {
        console.log(req.body)
        if (await Usuario.findOne({ email: req.body.email })) {
            return res.status(400).json({ error: "Esse email já existe" });
        }
        const usuario = await Usuario.create(req.body);
        return res.json(usuario);
    },
    async list(req, res) {
        const usuario = await Usuario.find({});
        return res.json(usuario);
    },
    async index(req, res) {
        const usuario = await Usuario.findOne({ email: req.params.email });
        if (!usuario) {
            return res.status(400).json({ error: "Usuario não existe" });
        }
        return res.json(usuario);
    }
};
