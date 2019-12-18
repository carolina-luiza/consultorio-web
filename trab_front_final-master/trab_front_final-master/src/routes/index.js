import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Medicos from "../pages/Medicos";
import Atendimentos from "../pages/Atendimento";
import Relatorio from "../pages/Relatorios";
import Inicial from "../pages/Inicial";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Cadastro" component={Cadastro} isPrivate />
        <Route path="/Medicos" component={Medicos} isPrivate />
        <Route path="/Atendimentos" component={Atendimentos} isPrivate />
        <Route path="/Relatorio" component={Relatorio} isPrivate />
        <Route exact path="/" component={Inicial} />
        <Route path="/Home" component={Home} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
