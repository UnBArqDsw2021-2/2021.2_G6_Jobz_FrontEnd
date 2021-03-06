import React, { useState } from "react";
import {
  MdOutlineMail,
  MdOutlinePersonOutline,
  MdOutlineSubtitles,
  MdPhone,
  MdLockOutline,
  MdWork,
} from "react-icons/md";
import Button from "../../components/Button";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import * as S from "./styles";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import content from "./static";
import { collaboratorRegistration } from "../../services/api";

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

function CollaboratorRegistrationPage() {
  let navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  let submitState = true;
  const [data, setData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    occupation: "",
  });

  function submit(e) {
    // const back = data;
    // console.log("back", data)
    e.preventDefault();
    setFormErrors(validate(data));

    console.log("formErrors", formErrors);
    if (submitState) {
      collaboratorRegistration(
        data.name,
        data.email,
        data.cpf,
        data.phone,
        data.password,
        data.occupation
      );
      navigate("/login");
    } else {
      // alert("erro colab register");
      console.log("erro registro");
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
    // console.log("password", confirmPassword);
    if (!values.name) {
      errors.name = "Campo nome obrigat??rio";
      submitState = false;
    } else if (values.name.length < 3) {
      submitState = false;
      errors.name = "Nome deve ter no m??nimo 3 caracteres";
    }

    if (!values.email) {
      submitState = false;
      errors.email = "Campo email obrigat??rio";
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

    if (!values.occupation) {
      submitState = false;
      errors.occupation = "Campo cargo obrigat??rio";
    }

    if (!values.password) {
      submitState = false;
      errors.password = "Campo senha obrigat??rio";
    } else if (!regexPassword.test(values.password)) {
      submitState = false;
      errors.password = "Senha inv??lida (8 a 30 caracteres)";
    }

    if (!confirmPassword) {
      // console.log("entrou", values.confirmPassword);
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

    if (e.value != undefined) newdata["occupation"] = e.value;
    else newdata[e.target.id] = e.target.value;
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
            <p>CADASTRO DE PRESTADOR DE SERVI??O</p>
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
            <div className="occupation">
              <div id="iconOccupation">
                <MdWork />
              </div>
              <Select
                onChange={(e) => handle(e)}
                id="occupation"
                value={content.find((obj) => obj.value === data)}
                placeholder="Selecione a Ocupa????o"
                options={content}
                // required
              />
              <p id="errorOccupation">{formErrors.occupation}</p>
            </div>
            <br />
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
            <Button type="submit" title={"CRIAR CONTA"} />
          </form>
          <div id="Linkation">
            <a href="/userRegistrationPage">?? um cliente?</a>
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

export default CollaboratorRegistrationPage;
