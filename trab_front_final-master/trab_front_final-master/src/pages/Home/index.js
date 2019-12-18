import React from "react";

import logo from "../../assets/logo_PSYCHO_HELP.png.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";


export default function Menu({ history }) {
  return (
    <Container>
      <div className="Tela">
        <nav className="Box_1">
          <img src={logo} className="image" />
        </nav>
        <div className="Box">
          <section>
            <Link className="lugar" to="../Cadastro">
              <div className="a">
                <img src={cadu} className="icon" />
                <h1>Cadastrar Usuário</h1>
              </div>
            </Link>
            <Link className="lugar" to="../Medicos">
              <div className="a">
                <img src={cadc} className="icon" />
                <h1>Cadastrar Médico</h1>
              </div>
            </Link>
            <Link className="lugar" to="../Atendimento">
              <div className="a">
                <img src={cads} className="icon" />
                <h1>Cadastrar Atendimento</h1>
              </div>
            </Link>
            <Link className="lugar" to="../Relatorio">
              <div className="a">
                <img src={rel} className="icon" />
                <h1>Exibir Relatórios</h1>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </Container>
  );
}
