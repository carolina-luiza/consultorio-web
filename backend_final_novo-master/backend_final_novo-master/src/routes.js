const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");
const MedicoController = require("./controllers/MedicoController");
const AtendimentoController = require("./controllers/AtendimentoController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/usuario", UserController.store);
routes.post("/sessions", SessionController.store);
routes.get("/atendimento", AtendimentoController.index);
routes.use(authMiddleware);


routes.post("/medico", MedicoController.store);
routes.get("/medico", MedicoController.list);

routes.post("/atendimento", AtendimentoController.store);

routes.get("/usuario", UserController.list);
routes.get("teste", (req, res) => res.json({ ok: true }));
module.exports = routes;