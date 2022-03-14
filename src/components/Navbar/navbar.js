import React from 'react'
import * as S from './styles'
import { FaBell } from 'react-icons/fa'
import LogoWhite from '../../assets/LogoWhite.svg'
import procura from '../../assets/procura.svg'
import Notification from '../../assets/Notification.svg'

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
        <img src={procura} id="btnBusca" alt="procura" />
        <input type="text" id="txtBusca" placeholder="Search" />
      </S.BuscaHeader>

      <S.ButtonsContainer>
        {props.explore ? <a href="/">Explore</a> : null}

        {props.preste ? (
          <a href="/collaboratorRegistrationPage">Preste Serviços</a>
        ) : null}

        {props.login ? (
          <a href="/login">{isLogged ? <FaBell /> : 'Login'}</a>
        ) : null}

        {props.cadastre ? (
          <a href="/userRegistrationPage">Cadastre-se</a>
        ) : null}

        {props.home ? <a href="/">Home</a> : null}

        {props.notification ? (
          <button type="button">
            <img src={Notification} alt="icon-notification" />
          </button>
        ) : null}
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Navbar
