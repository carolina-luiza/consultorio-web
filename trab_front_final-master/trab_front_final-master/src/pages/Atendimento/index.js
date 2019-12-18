import React, { useState, useEffect } from "react";

import api from "../../services/api";
import logo from "../../assets/logo.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";

export default function Servico({ history }) {
  const [medico1, setMedico1] = useState([]);

  const [medico, setMedico] = useState([]);

  const [dia, setDia] = useState([]);
  const [valor, setValor] = useState([]);
  const [tipodeatendimento, setTipodeatendimento] = useState([]);
  

  useEffect(() => {
    const populateMedicos = async () => {
      const requisicao = await api.get(`/medico`);
      setMedico1(requisicao.data);
    };
    populateMedicos();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/atendimento", {
        medico,
        dia,
        valor,
        tipodeatendimento,
        tamanho
      });
      history.push("/Home");
      alert("Cadastrado com sucesso");
    } 
    catch (err) {
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
            <h1>Cadastrar Atendimento</h1>
            <form onSubmit={handleSubmit}>
              <select
                id="medico"
                name="medico"
                onChange={event => setMedico(event.target.value)}
              >
                {medico1 &&
                  medico1.map(({ _id, nome }) => (
                    <option value={_id}>
                      {nome}
                    </option>
                  ))}
              </select>

              <input
                type="Number"
                required
                placeholder="Valor do Atendimento"
                id="valor"
                onChange={event => setValor(event.target.value)}
              />

              <select
                id="tipodeatendimento"
                onChange={event => setTipodeatendimento(event.target.value)}
              >
                <option value="Consulta Médica">Consulta Médica</option>
                <option value="Cirurgia Básica">Cirurgia Básica</option>
                <option value="Cirungia Avançada">Cirurgia Avançada</option>
                <option value="Vacina">Vacina</option>
                <option value="Tratamento">Tratamento</option>
              </select>
              <input
                type="date"
                required
                id="data"
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
