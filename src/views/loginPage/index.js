import React, { useState, useContext } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { AuthContext } from "../../context/auth"


function LoginPage() {

  const { authenticated, login } = useContext(AuthContext);

  const [data, setData] = useState({
    email: '',
    password: ''
  })


  function submit(e) {
    e.preventDefault() //não faça a ação padrão de atualizar a pagina
    const back = data;
    console.log("back", data)
    login(data.email, data.password); // integracao com contexto e api
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <S.Container>
      <Navbar explore={true} preste={true} login={true} cadastre={true} />
      <S.Body>
        <div id="GroupForm">
          <header>
            <img src={logo} alt="logo" />
          </header>

          <form onSubmit={e => submit(e)}>
            <p>LOGIN</p>
            <Input onChange={e => handle(e)} id="email" placeholder="EMAIL" type="email" required />
            <Input onChange={e => handle(e)} id="password" value={data.password} placeholder="SENHA" type="password" required />
            <br></br>
            <Button type="submit" title={'LOGIN'} required />
          </form>

          <S.RegistrationButton href="/userRegistrationPage">
            Esqueceu a senha?
          </S.RegistrationButton>
        </div>
      </S.Body>
      <Footer />
    </S.Container>
  )
}

export default LoginPage
