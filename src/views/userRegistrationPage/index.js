import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import axios from 'axios'
import api from '../../services/api'

function UserRegistrationPage() {

  const url = api
  const [data, setData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: ''
  })

  function submit(e) {
    //const back = data;
    //console.log("back", data) verifica se dados chegaram até aqui
    e.preventDefault()

    axios.post(url, {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      password: data.password
    }).then(res => {
      console.log(res.data)
    })
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
            <p>CADASTRO DE CLIENTE</p>
          </header>

          <form onSubmit={e => submit(e)}>
            <Input onChange={e => handle(e)} id="name" placeholder="NOME" type="text" required />
            <Input onChange={e => handle(e)} id="email" placeholder="EMAIL" type="email" required />
            <Input onChange={e => handle(e)} id="cpf" placeholder="CPF" type="number" required />
            <Input onChange={e => handle(e)} id="phone" placeholder="TELEFONE" type="number" required />
            <Input onChange={e => handle(e)} id="password" placeholder="SENHA" type="password" required />
            <Input placeholder="CONFIRMAR SENHA" type="password" required />
            <br></br>
            <Button type="submit" title={'CRIAR CONTA'} required />
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
  )
}

export default UserRegistrationPage
