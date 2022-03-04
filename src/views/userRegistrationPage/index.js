import React from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import * as S from './styles'

const UserRegistrationPage = () => (
  <S.Container>
    <header>
      <img src={logo} alt="logo" />
    </header>

    <form>
      <Input placeholder="NOME" type="text" required />
      <Input placeholder="EMAIL" type="text" required />
      <Input placeholder="CPF" type="text" required />
      <Input placeholder="TELEFONE" type="text" required />
      <Input placeholder="SENHA" type="text" required />
      <Input placeholder="CONFIRMAR SENHA" type="text" required />
      <br></br>
      <Button type="submit" title={'CRIAR CONTA'} />
    </form>
  </S.Container>
)

export default UserRegistrationPage
