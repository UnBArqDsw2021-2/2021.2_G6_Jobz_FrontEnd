import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { Axios } from 'axios'

function UserRegistrationPage() {
  return (
    <S.Container>
      <S.body>
        <Navbar home={true} explore={true} notification={true} />
        <S.navigationBar>
          <sideBar>
            <Button path="/" title="Perfil" ButtonColor="#39C0A8" textColor="white" borderColor="1px solid #33FFDA"
            />
            <Button path="/security" title="Login e Segurança" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
            />
            <Button path="/" title="Pagamentos" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
            />
            <Button path="/" title="Notificações" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
            />
            <Button path="/myServices" title="Meus serviços" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
            />
          </sideBar>
        </S.navigationBar>

        <S.rightSide>
          <h1> Perfil do usuário </h1>
          <comando> Atualize suas informações abaixo </comando>
          <hr />
          <addfile>
            Adicione uma imagem de perfil
            <input type="file"></input>
          </addfile>
          <br></br>
          <br></br>
          Nome:
          <Input />
          <description>
            Descrição:
            <Input />
          </description>
          Email:
          <Input />
          Telefone:
          <Input />
          <br></br>
          <Button title="Enviar" />
        </S.rightSide>
      </S.body>

      <Footer />
    </S.Container>
  )
}

export default UserRegistrationPage
