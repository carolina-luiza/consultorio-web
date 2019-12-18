import React, { useState } from "react";

import api from "../../services/api";

import logo from "../../assets/logo.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [especializacao, setEspecializacao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dia, setDia] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/medico", {
        nome,
        cpf,
        especializacao,
        telefone,
        dia,
      });
      history.push("/Home");
      alert("Cadastrado com sucesso");
    } catch (err) {
      alert("O CPF informado já foi cadastrado");
    }
  }

  return (
    <Container>
      <div className="Cadastrar_Medico MatcSreen">
        <nav className="Box_1">
          <img src={logo} className="image" />
          <Link className="link" to="../Home">
            Voltar{" "}
          </Link>
        </nav>
        <div className="Box">
          <section>
            <h1>Cadastrar Medico</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Nome do Medico"
                id="nome"
                onChange={event => setNome(event.target.value)}
              />
              <input
                type="number"
                required
                placeholder="CPF do Medico"
                id="cpf"
                onChange={event => setCpf(event.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Especialização do Medico"
                id="especializacao"
                onChange={event => setEspecializacao(event.target.value)}
              />
              <input
                type="number"
                required
                placeholder="Telefone do Medico"
                id="telefone"
                onChange={event => setTelefone(event.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Dia de Atendimento do Medico"
                id="dia"
                onChange={event => setDia(event.target.value)}
              />
              <button className="enviar">
                <p>Cadastrar</p>
              </button>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
}
