import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./style.js";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_PSYCHO_HELP.png";
export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/usuario", {
        nome,
        email,
        password
      });
      history.push("/Home");
      alert("Cadastrado com sucesso");
    } catch (err) {
      alert("e-mail existente");
    }
  }

  return (
    <Container>
      <div className="Cadastrar_Medico MatcSreen">
        <nav>
          <img src={logo} className="image" />
          <Link className="link" to="../Home">
            Voltar{" "}
          </Link>
        </nav>
        <section>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Seu nome"
              id="nome"
              onChange={event => setNome(event.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Seu e-mail"
              id="email"
              onChange={event => setEmail(event.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Sua senha"
              id="password"
              onChange={event => setPassword(event.target.value)}
            />
            <div>
              <button className="enviar">
                <p>Criar Conta</p>
              </button>
            </div>
          </form>
        </section>
      </div>
    </Container>
  );
}
