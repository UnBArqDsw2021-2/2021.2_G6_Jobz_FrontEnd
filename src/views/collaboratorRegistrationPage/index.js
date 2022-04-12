import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import Select from 'react-select';
import axios from 'axios'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import content from './static'
import { collaboratorRegistration } from '../../services/api'

function CollaboratorRegistrationPage() {

  let navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    occupation: '',
  })

  function submit(e) {
    // const back = data;
    // console.log("back", data) 
    e.preventDefault()

    collaboratorRegistration(data.name, data.email, data.cpf, data.phone, data.password, data.occupation)
    navigate('/login');
  }

  function handle(e) {
    const newdata = { ...data }

    if (e.value != undefined)
      newdata["occupation"] = e.value
    else
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
            <p>CADASTRO DE PRESTADOR DE SERVIÇO</p>
          </header>
          <form onSubmit={e => submit(e)}>
            <Input onChange={e => handle(e)} id="name" value={data.name} placeholder="NOME" type="text" color="red" />
            <Input onChange={e => handle(e)} id="email" value={data.email} placeholder="EMAIL" type="email" required />
            <Input onChange={e => handle(e)} id="cpf" value={data.cpf} placeholder="CPF ou CNPJ" type="number" required />
            <Input onChange={e => handle(e)} id="phone" value={data.phone} placeholder="TELEFONE" type="number" required />
            <Select onChange={e => handle(e)} id="occupation" value={content.find(obj => obj.value === data)} placeholder="Selecione a Ocupação" options={content} required />
            <br />
            <Input onChange={e => handle(e)} id="password" value={data.password} placeholder="SENHA" type="password" required />
            <Input placeholder="CONFIRMAR SENHA" type="password" required />
            <br></br>
            <Button type="submit" title={'CRIAR CONTA'} />
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
  )
}

export default CollaboratorRegistrationPage
