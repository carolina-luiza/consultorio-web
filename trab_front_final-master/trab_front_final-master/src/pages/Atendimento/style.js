import styled from "styled-components";
export const Container = styled.div `
  height: 100%;
  width: 100%;
  section {
    height: 500px;
    width: 401px;
    margin-top: 50px;
    margin: 100px auto 50px auto;
    background:  linear-gradient(180deg, #06A5F5 0%, rgba(255, 255, 255, 0) 100%), #9E36FE;
    text-align: center;
    align-content: center;
    align-items: center;
  }
  .image {
    height: 15%;
    width: 15%;
    margin-right: 60%;
    margin-left: 2%;
  }
  h1 {
    font-size: 30pt;
    margin-bottom: 5%;
    margin-top: 10%;
  }
  table {
    border-style: solid;
    border-color: black;
    color: #A13CFE;
  }
  body {
    margin: 0px;
    font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", sans-serif;
  }
  div {
    margin: 0px;
    background-color: white;
  }
  .Cadastrar_Cliente {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: #A13CFE;
  }
  .Cadastrar_Cliente .Box_1 {
    background-color: linear-gradient(180deg, #06A5F5 0%, rgba(255, 255, 255, 0) 100%), #9E36FE;;
    color: white;
    text-align: left;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 1.4;
    box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: inline;
    align-items: center;
    margin-right: 0%;
    margin-left: 0%;
    min-height: 78px;
    margin-top: -1px;
  }
  .link {
    background-color: #A13CFE;
    color: #fffefe;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    width: 16%;
    font-weight: bold;
    padding: 14px 10px 14px 10px;
    height: 10%;
    box-shadow: 0px 1px grey;
    border-radius: 10px;
  }
  .link:hover {
    background-color: #39076A;
    color: #fffefe;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    width: 16%;
    font-weight: bold;
    padding: 14px 10px 14px 10px;
    height: 10%;
    box-shadow: 0px 1px #A13CFE;
    border-radius: 10px;
  }

  .enviar {
    margin-top: 20%;
    background-color: #408acf;
    color: #fffefe;
    width: 60%;
  }
  .enviar:hover {
    margin-top: 20%;
    background-color: #408acf;
    color: #fffefe;
    width: 60%;
  }
  button {
    font-size: 18px;
    margin: 10px;
    padding: 10px 10px 10px 10px;
    color: black;
    margin-bottom: 5px;
    width: 100%;
    border-radius: 0px;
    border: 0px;
    text-align: center;
    cursor: pointer;
  }
  button:hover {
    font-size: 18px;
    margin: 10px;
    padding: 10px 10px 10px 10px;
    color: black;
    margin-bottom: 5px;
    width: 100%;
    border-radius: 0px;
    border: 0px;
    text-align: center;
    cursor: pointer;
  }
  .Cadastrar_Cliente .Box {
    color: #ffffff;
    text-align: left;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    padding: 10%, 50%, 10%, 50%;
  }
  form {
    color: black;
    display: inline-block;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input[type="text"] {
    border-style: solid;
    border-color: pink;
    border-width: 0 0 2px 0;
    padding-top: 25px;
    width: 60%;
    background: pink;
    font-size: 16pt;
  }
`;