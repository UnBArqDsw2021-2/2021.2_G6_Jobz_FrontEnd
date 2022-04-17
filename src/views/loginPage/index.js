import React, { useState, useContext, useEffect } from "react";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import Button from "../../components/Button";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import * as S from "./styles";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { AuthContext } from "../../context/auth";

function LoginPage() {
  const { authenticated, login } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //validacao aqui pai
  function submit(e) {
    e.preventDefault(); //não faça a ação padrão de atualizar a pagina
    setFormErrors(validate(data));
    console.log("formErrors", formErrors);
    // const back = data;
    // console.log("back", data);
    const response = login(data.email, data.password); // integracao com contexto e api
    console.log("response login", response);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]{3,30}\@[a-z]{2,7}\.[a-z]{2,4}(\.[a-z]{2,4})?$/;
    const regexPassword = /^[a-zA-Z0-9+\-*\^´\+_)(*\&!@#]{8,30}$/;

    if (!values.email) {
      errors.email = "Campo email obrigatório";
    } else if (!regex.test(values.email)) {
      errors.email = "Email inválido";
    }
    if (!values.password) {
      errors.password = "Campo senha obrigatório";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Senha incorreta";
    }
    return errors;
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <S.Container>
      <Navbar explore={true} preste={true} login={true} cadastre={true} />
      <S.Body>
        <div id="GroupForm">
          <header>
            <img src={logo} alt="logo" />
          </header>
          <form onSubmit={(e) => submit(e)}>
            <p>LOGIN</p>
            <div className="email">
              <div id="iconEmail">
                <MdOutlineMail />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="email"
                placeholder="EMAIL"
                // type="email"
                // required
              />
              <p id="errorEmail">{formErrors.email}</p>
            </div>

            <div className="password">
              <div id="iconPassword">
                <MdLockOutline />
              </div>
              <Input
                onChange={(e) => handle(e)}
                id="password"
                value={data.password}
                placeholder="SENHA"
                type="password"
                // required
              />
              <p id="errorPassword">{formErrors.password}</p>
            </div>
            <br></br>
            <Button type="submit" title={"LOGIN"} required />
          </form>

          <S.RegistrationButton href="/userRegistrationPage">
            Esqueceu a senha?
          </S.RegistrationButton>
        </div>
      </S.Body>
      <Footer />
    </S.Container>
  );
}

export default LoginPage;
