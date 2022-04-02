import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import fundoVerde from '../../assets/fundoVerde.png'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import api from '../../services/api'
import { axios } from 'axios'

//localhost: 8000 / api - auth / login /

function LoginPage() {
  const url = 'api-auth/login/?next=/user/'

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  function submit(e) {
    const back = data;
    console.log("back", data)
    e.preventDefault()

    axios.post(url, {
      email: data.email,
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

          <form onSubmit={e => submit(e)}>
            <p>LOGIN</p>
            <Input onChange={e => handle(e)} id="email" placeholder="EMAIL" type="email" required
            />
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
