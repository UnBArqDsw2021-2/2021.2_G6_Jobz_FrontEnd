import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { Axios } from 'axios'

function SecurityPage() {
  return (
    <S.Container>
      <S.body>
        <Navbar home={true} explore={true} notification={true} />
        <S.navigationBar>
          <div id="sideBar">
            <Button
              path="/userProfile"
              title="Perfil"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />
            <Button
              path="/security"
              title="Login e Segurança"
              ButtonColor="#39C0A8"
              textColor="white"
              borderColor="1px solid #33FFDA"
            />
            <Button
              path="/myServices"
              title="Meus serviços"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />
            <Button
              path="/"
              title="Pagamentos"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />
            <Button
              path="/"
              title="Notificações"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />

          </div>
        </S.navigationBar>

        <S.rightSide>
          <h1> Login e Segurança </h1>
          <div id="comando"> Gerencie suas informações de segurança abaixo </div>
          <hr />

          <div id="email">
            <p>Email:</p>
            <Input type="email" placeholder="email@.com.br" />
          </div>
          <div id='password'>
            <p> Senha:</p>
            <Input type="password" placeholder="***********" />
          </div>

          <div id="confirmpassword">
            <p>Confirmar senha:</p>
            <Input type="password" placeholder="***********" />
          </div>
          <br></br>
          <Button title="Enviar" />
        </S.rightSide>
      </S.body>

      <Footer />
    </S.Container>
  )
}

export default SecurityPage
