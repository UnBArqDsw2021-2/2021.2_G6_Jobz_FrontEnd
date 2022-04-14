import React from 'react'
import * as S from './styles'
import { FaBell } from 'react-icons/fa'
import LogoWhite from '../../assets/LogoWhite.svg'
import procura from '../../assets/procura.svg'
import Notification from '../../assets/Notification.svg'
import Button from '../Button'

const isLogged = false

function Navbar(props) {
  return (
    <S.Container>
      <S.LogoContainer>
        <a href="/" class="Homepage">
          <button type="button">
            {' '}
            <img src={LogoWhite} alt="logo-white" />
          </button>
        </a>
      </S.LogoContainer>

      <S.BuscaHeader>
        <input type="text" id="txtBusca" placeholder="Search" />
        <img src={procura} id="btnBusca" alt="procura" />
      </S.BuscaHeader>

      <S.ButtonsContainer>
        {props.explore ? <a href="/">Explore</a> : null}

        {props.preste ? (
          <a href="/collaboratorRegistrationPage">Preste Serviços</a>
        ) : null}

        {props.login ? (
          <a id="loginButton" href="/login">{isLogged ? <FaBell /> : 'Login'}</a>
        ) : null}

        {props.cadastre ? (
          <Button path="/userRegistrationPage" title="Cadastre-se" ButtonColor="#39C0A8" borderColor="1px solid #33FFDA" textColor="White" borderRadius="76px" buttonWidth="130px"
          />
        ) : null}

        <Button buttonWidth='180px' path='/userRegistrationPage' title="Cadastre-se" ButtonColor="#39C0A8" borderColor="1px solid #33FFDA" textColor='White' borderRadius="76px" />
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Navbar
