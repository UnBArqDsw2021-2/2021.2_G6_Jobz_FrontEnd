import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import fundoVerde from '../../assets/fundoVerde.png'
import * as S from './styles'
import { Axios } from 'axios'

function LoginPage() {

  const url = ""
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password,
    }).then(res => {
      console.log(res.data);
    })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <div>

      <S.Container>

        <header>
          <img src={logo} alt="logo" />
        </header>

        <form onSubmit={(e) => submit(e)}>
          <Input onChange={(e) => handle(e)} id="email" placeholder="EMAIL" type="email" required />
          <Input onChange={(e) => handle(e)} id="password" value={data.password} placeholder="SENHA" type="password" required />
          <br></br>
          <Button type="submit" title={'LOGIN'} />
        </form>

        <S.RegistrationButton href="/userRegistrationPage">
          cadastre-se aqui
        </S.RegistrationButton>
      </S.Container>
    </div>
  );
}

export default LoginPage;
