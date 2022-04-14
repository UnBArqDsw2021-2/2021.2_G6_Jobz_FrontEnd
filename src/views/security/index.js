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
            <Button
              path="/myServices"
              title="Meus serviços"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />
            
          </sideBar>
        </S.navigationBar>

        <S.rightSide>
          <h1> Log in and security </h1>
          <comando> Gerencie suas informações de segurança abaixo </comando>
          <hr />

          <email>
            <p>Email:</p>
            <Input type="email" placeholder="email@.com.br" />
          </email>
          <password>
            <p> Senha:</p>
            <Input type="password" placeholder="***********" />
          </password>

          <confirmpassword>
            <p>Confirmar senha:</p>
            <Input type="password" placeholder="***********" />
          </confirmpassword>
          <br></br>
          <Button title="Enviar" />
        </S.rightSide>
      </S.body>

      <Footer />
    </S.Container>
  )
}

export default UserRegistrationPage
