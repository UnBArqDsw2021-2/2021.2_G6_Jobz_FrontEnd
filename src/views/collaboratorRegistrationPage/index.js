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
    const regexPassword = /^[a-zA-Z0-9+\-*\^´\+_)(*\&!@#]{8,30}$/;

    let confirmPassword = document.getElementById("confirmPassword").value;
    // console.log("password", confirmPassword);
    if (!values.name) {
      errors.name = "Campo nome obrigatório";
      submitState = false;
    } else if (values.name.length < 3) {
      submitState = false;
      errors.name = "Nome deve ter no mínimo 3 caracteres";
    }

    if (!values.email) {
      submitState = false;
      errors.email = "Campo email obrigatório";
    } else if (!regexEmail.test(values.email)) {
      submitState = false;
      errors.email = "Email no formato inválido (minimo 6 caracteres)";
    }

    if (!values.cpf) {
      submitState = false;
      errors.cpf = "Campo cpf obrigatório";
    } else if (!regexCpf.test(values.cpf)) {
      submitState = false;
      errors.cpf = "CPF inválido";
    }

    if (!values.phone) {
      submitState = false;
      errors.phone = "Campo telefone obrigatório";
    } else if (!regexPhone.test(values.phone) && values.phone >= 11000000000) {
      submitState = false;
      errors.phone = "Telefone inválido";
    }

    if (!values.occupation) {
      submitState = false;
      errors.occupation = "Campo cargo obrigatório";
    }

    if (!values.password) {
      submitState = false;
      errors.password = "Campo senha obrigatório";
    } else if (!regexPassword.test(values.password)) {
      submitState = false;
      errors.password = "Senha inválida (8 a 30 caracteres)";
    }

    if (!confirmPassword) {
      // console.log("entrou", values.confirmPassword);
      submitState = false;
      errors.confirmPassword = "Campo confirmar senha obrigatório";
    } else if (confirmPassword !== values.password) {
      submitState = false;
      errors.confirmPassword = "Senhas não conferem";
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
            <p>CADASTRO DE PRESTADOR DE SERVIÇO</p>
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
                errormessage="Email inválido"
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
                errormessage="CPF inválido"
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
                errormessage="Telefone inválido"
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
                placeholder="Selecione a Ocupação"
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
                // errormessage="Senha inválida"
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
                errormessage="Senha inválida"
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
            <a href="/userRegistrationPage">É um cliente?</a>
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
