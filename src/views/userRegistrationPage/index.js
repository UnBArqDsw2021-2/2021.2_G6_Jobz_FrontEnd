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

function TestaCPF(strCPF) {
  var Soma;
  var Resto;
  var i;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

function UserRegistrationPage() {
  let navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  let submitState = true;
  const [data, setData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log("data", data);
    setFormErrors(validate(data));

    console.log("formErrors", formErrors);

    if (submitState) {
      userRegistration(
        data.name,
        data.email,
        data.cpf,
        data.phone,
        data.password
      );
      navigate("/login");
    } else {
      console.log("erro registro");
      // alert("erro registro");
    }
  }

  const validate = (values) => {
    const errors = {};
    const regexEmail =
      /^[a-zA-Z0-9]{6,30}\@[a-z]{2,7}\.[a-z]{2,4}(\.[a-z]{2,4})?$/;
    const regexCpf = /^\d{11}$/;
    const regexPhone = /^\d{11}$/;
    const regexPassword = /^[a-zA-Z0-9+\-*\^??\+_)(*\&!@#]{8,30}$/;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (!values.name) {
      errors.name = "Campo nome obrigat??rio";
      submitState = false;
    } else if (values.name.length < 3) {
      errors.name = "Nome deve ter no m??nimo 3 caracteres";
      submitState = false;
    }
    if (!values.email) {
      errors.email = "Campo email obrigat??rio";
      submitState = false;
    } else if (!regexEmail.test(values.email)) {
      submitState = false;
      errors.email = "Email no formato inv??lido (minimo 6 caracteres)";
    }

    if (!values.cpf) {
      submitState = false;
      errors.cpf = "Campo cpf obrigat??rio";
    } else if (!regexCpf.test(values.cpf)) {
      submitState = false;
      errors.cpf = "CPF inv??lido";
    } else if (!TestaCPF(values.cpf)) {
      submitState = false;
      errors.cpf = "CPF inv??lido";
    }

    if (!values.phone) {
      submitState = false;
      errors.phone = "Campo telefone obrigat??rio";
    } else if (!regexPhone.test(values.phone) && values.phone >= 11000000000) {
      submitState = false;
      errors.phone = "Telefone inv??lido";
    }

    if (!values.password) {
      submitState = false;
      errors.password = "Campo senha obrigat??rio";
    } else if (!regexPassword.test(values.password)) {
      submitState = false;
      errors.password = "Senha inv??lida (8 a 30 caracteres)";
    }

    if (!confirmPassword) {
      submitState = false;
      errors.confirmPassword = "Campo confirmar senha obrigat??rio";
    } else if (confirmPassword !== values.password) {
      submitState = false;
      errors.confirmPassword = "Senhas n??o conferem";
    }

    return errors;
  };

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
                // type="text"
                errormessage="Nome requerido"
                // pattern="[a-zA-Z]{3,}"
                // required
              />
              <p id="errorName">{formErrors.name}</p>
            </div>

            <div className="email">
              <div id="iconeEmail">
                <MdOutlineMail />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="email"
                placeholder="EMAIL"
                // type="email"
                errormessage="Email inv??lido"
                // pattern="[a-zA-Z0-9]{6,30}\@[a-z]{2,7}\.[a-z]{2,4}(\.[a-z]{2,4})?"
                // required
              />
              <p id="errorEmail">{formErrors.email}</p>
            </div>

            <div className="cpf">
              <div id="iconeCpf">
                <MdOutlineSubtitles />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="cpf"
                placeholder="CPF"
                // type="number"
                errormessage="CPF inv??lido"
                // pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                // required
              />
              <p id="errorCpf">{formErrors.cpf}</p>
            </div>

            <div className="phone">
              <div id="iconePhone">
                <MdPhone />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="phone"
                placeholder="TELEFONE"
                // type="number"
                errormessage="Telefone inv??lido"
                // pattern="[0-9]{2}[0-9]{4}-[0-9]{4}"
                // required
              />
              <p id="errorPhone">{formErrors.phone}</p>
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
                // errormessage="Senha inv??lida"
                // pattern="[a-zA-Z0-9]{6,30}"
                // required
              />
              <p id="errorPassword">{formErrors.password}</p>
            </div>

            <div className="confirmPassword">
              <div id="iconePassword">
                <MdLockOutline />
              </div>
              <Input
                id="confirmPassword"
                placeholder="CONFIRMAR SENHA"
                type="password"
                errormessage="Senha inv??lida"
                // pattern={data.password}
                // required
              />
              {/* {formErrors.confirmPassword ? ( */}
              <p id="errorConfirmPassword">{formErrors.confirmPassword}</p>
              {/* ) : ( */}
              {/* <p id="correctPassword">senha correta</p> */}
              {/* )} */}
            </div>

            <br></br>

            <Button type="submit" title={"CRIAR CONTA"} required />
          </form>

          <div id="Linkation">
            <a href="/collaboratorRegistrationPage">
              ?? um prestador<br></br>de servi??o?
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
