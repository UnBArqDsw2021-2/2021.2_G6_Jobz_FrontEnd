import React, { useState } from "react";
import {
  MdOutlineMail,
  MdOutlinePersonOutline,
  MdOutlineSubtitles,
  MdPhone,
  MdLockOutline,
} from "react-icons/md";
import Button from "../../components/Button";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import * as S from "./styles";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import { userRegistration } from "../../services/api";

function UserRegistrationPage() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
  });

  function submit(e) {
    //const back = data;
    //console.log("back", data) verifica se dados chegaram até aqui
    e.preventDefault();
    userRegistration(
      data.name,
      data.email,
      data.cpf,
      data.phone,
      data.password
    );
    navigate("/login");
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <S.Container>
      <Navbar explore={true} preste={true} login={true} cadastre={true} />
      <S.Body>
        <div id="GroupForm">
          <header>
            <img src={logo} alt="logo" />
            <p>CADASTRO DE CLIENTE</p>
          </header>

          <form onSubmit={(e) => submit(e)}>
            <div className="name">
              <div id="iconeNome">
                <MdOutlinePersonOutline />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="name"
                placeholder="NOME"
                type="text"
                required
              />
            </div>

            <div className="email">
              <div id="iconeEmail">
                <MdOutlineMail />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="email"
                placeholder="EMAIL"
                type="email"
                required
              />
            </div>

            <div className="cpf">
              <div id="iconeCpf">
                <MdOutlineSubtitles />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="cpf"
                placeholder="CPF"
                type="number"
                required
              />
            </div>

            <div className="phone">
              <div id="iconePhone">
                <MdPhone />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="phone"
                placeholder="TELEFONE"
                type="number"
                required
              />
            </div>

            <div className="password">
              <div id="iconePassword">
                <MdLockOutline />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="password"
                placeholder="SENHA"
                type="password"
                required
              />
            </div>
            <div className="confirmPassword">
              <Input placeholder="CONFIRMAR SENHA" type="password" required />
            </div>
            <br></br>
            <Button type="submit" title={"CRIAR CONTA"} required />
          </form>

          <div id="Linkation">
            <a href="/collaboratorRegistrationPage">
              É um prestador<br></br>de serviço?
            </a>

            <br></br>
            <a className="a1" href="/">
              Esqueceu a<br></br>senha?
            </a>
          </div>
        </div>
      </S.Body>
      <Footer />
    </S.Container>
  );
}

export default UserRegistrationPage;
