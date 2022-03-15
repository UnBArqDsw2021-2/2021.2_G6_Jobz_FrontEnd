import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import Select from '../../components/Select/index'
import { Axios } from 'axios'

function UserRegistrationPage() {
  const url = ''
  const [data, setData] = useState({
    name: '',
    email: '',
    cpf: '',
    phoneNumber: '',
    password: ''
  })

  function submit(e) {
    e.preventDefault()
    Axios.post(url, {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phoneNumber: data.phoneNumber,
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
          </header>
          CADASTRO DE PRESTADOR DE SERVIÇO
          <form onSubmit={e => submit(e)}>
            <Input
              onChange={e => handle(e)}
              id="name"
              value={data.name}
              placeholder="NOME"
              type="text"
              color="red"
            />
            <Input
              onChange={e => handle(e)}
              id="email"
              value={data.email}
              placeholder="EMAIL"
              type="email"
              required
            />
            <Input
              onChange={e => handle(e)}
              id="cpf"
              value={data.cpf}
              placeholder="CPF ou CNPJ"
              type="number"
              required
            />
            <Input
              onChange={e => handle(e)}
              id="phoneNumber"
              value={data.phoneNumber}
              placeholder="TELEFONE"
              type="number"
              required
            />

            <Select />

            <Input
              onChange={e => handle(e)}
              id="password"
              value={data.password}
              placeholder="SENHA"
              type="password"
              required
            />
            <Input placeholder="CONFIRMAR SENHA" type="password" required />

            <br></br>
            <Button type="submit" title={'CRIAR CONTA'} />
          </form>
          <div id="Linkation">
            <a href="/userRegistrationPage">É um cliente?</a>
            <br></br>
            <a class="a1" href="/">
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
