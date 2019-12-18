import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./style.js";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", {
        email,
        password
      });

      const { token, user: userData } = response.data;
      if (token) {
        localStorage.setItem("@CESTA/token", token, userData);
      }
      history.push("/Home");
    } catch (err) {
      console.log("response", err);
    }
  }
  //check box onChange={event => setAdmin(isAdmin)}
  return (
    <Container>
      <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            <button>
              <p>Entrar</p>
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
}
