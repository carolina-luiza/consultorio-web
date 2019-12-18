import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Relatorio from "../../components/Relatorios";
import logo from "../../assets/logo.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";

export default function Relatorios({ history }) {
  const [a, setA] = useState([]);

  useEffect(() => {
    async function loada() {
      const response = await api.get("/atendimento");
      setA(response.data);
    }
    loada();
  }, [a]);

  return (
    <Container>
      <div className="Cadastrar_Medico MatcSreen">
        <nav className="Box_1">
          <img src={logo} className="image" />
          <Link className="link" to="../Home">
            Voltar
          </Link>
        </nav>
        <div className="Box">
          <section>
            <table>
              <tr>
                <th>Nome do Médico</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Tipo de Atendimento</th>
                <th>Data do Atendimento</th>
                <th>Valor Cobrado</th>
              </tr>
              {relatorios &&
                relatorios.map(relatorio => (
                  <Relatorio
                    nome={relatorio.medico.nome}
                    cpf={relatorio.medico.cpf}
                    telefone={relatorio.medico.telefone}
                    tipodeatendimento={relatorio.tipodeatendimento}
                    dia={relatorio.dia}
                    valor={relatorio.valor}
                  />
                ))}
            </table>
          </section>
        </div>
      </div>
    </Container>
  );
}
