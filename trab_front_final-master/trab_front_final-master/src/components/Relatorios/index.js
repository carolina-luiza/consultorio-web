import React from "react";

export default function Relatorios(props) {
  return (
    <tr>
      <td>{props.nome}</td>
      <td>{props.cpf}</td>
      <td>{props.telefone}</td>
      <td>{props.tipodeservico}</td>
      <td>{props.dia}Dia de Atendimento</td>
      <td>{props.valor} Reais</td>
    </tr>
  );
  }