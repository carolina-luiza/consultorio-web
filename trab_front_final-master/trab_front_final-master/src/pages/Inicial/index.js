import React, { Component } from "react";
import api from "../../services/api";
import logo from "../../assets/logo_PSYCHO_HELP.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    servicos: []
  };
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/service");
    console.log(response);
    this.setState({ servicos: response.data });
  };

  render() {
    return (
      <Container>
        <div className="Cadastrar_Cliente MatcSreen">
          <nav className="Box_1">
            <img src={logo} className="image" />
            <Link className="link" to="../Login">
              Login
            </Link>
          </nav>
          <div className="Box">
            <section></section>
          </div>
        </div>
      </Container>
    );
  }
}
