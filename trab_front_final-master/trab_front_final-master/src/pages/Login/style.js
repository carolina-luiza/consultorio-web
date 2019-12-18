import styled from "styled-components";

export const Container = styled.div `
  height: 100%;
  width: 100%;
  
  margin: #CDB3E6;
  padding: #CDB3E6;
  
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
  h1 {
    padding-top: 30px;
    font-size: 32pt;
  }
  form {
    color: #CDB3E6;;
    display: inline-block;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input[type="email"],
  input[type="password"] {
    border-style: solid;
    border-color: white;
    border-width: 0 0 2px 0;
    padding-top: 25px;
    width: 300px;
    background: none;
    font-size: 16pt;
    border-radius: 10px;
  }
  div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  div p {
    color: #A13CFE;
    font-size: 14pt;
    border-radius: 10px;
  }
  /*a {
    //text-decoration: none;
  }*/
  nav {
    width: 100%;
    color: #A13CFE;;
    display: flex;
    max-width: 401px;
    border-radius: 10px;
  }

  nav .link {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#A13CFE;
    border-radius: 10px;
  }

  nav .link img {
    display: block;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      padding-top: 10px;
      font-size: 25pt;
    }
    input[type="email"],
    input[type="password"] {
      padding-top: 20px;
      width: 200px;
      background: #CDB3E6;
      font-size: 12pt;
    }
    p {
      font-size: 10pt;
    }
    section {
      height: 400px;
      width: 301px;
      margin: 20px auto;
      background: #A13CFE;
      text-align: center;
      align-self: center;
      padding-bottom: 50px;
      background: #A13CFE;
      border-radius: 10px;
    }
    nav {
      width: 100%;
      max-width: 301px;
    }
  }
`;