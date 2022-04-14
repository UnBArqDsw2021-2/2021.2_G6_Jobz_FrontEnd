import React, { useContext } from 'react'
import * as S from './styles'
import { FaBell } from 'react-icons/fa'
import LogoWhite from '../../assets/LogoWhite.svg'
import procura from '../../assets/procura.svg'
import Notification from '../../assets/Notification.svg'
import Button from '../Button'
import { AuthContext } from '../../context/auth'
import usuario from '../../assets/usuario.png'
import logOff from '../../assets/logOff.png'
import { useNavigate } from 'react-router-dom'


function Navbar(props) {

  let navigate = useNavigate()
  const isLogged = false;
  const { authenticated, logout } = useContext(AuthContext);

  function navigateToPage() {
    navigate("/userProfile");
  }

  let auth;
  if (localStorage.getItem("loggedUser") === null) {
    auth = null;
  } else {
    auth = true;
  }

  return (
    <S.Container>
      <S.LogoContainer>
        <a href="/" className="Homepage">
          <button type="button">
            {' '}
            <img src={LogoWhite} alt="logo-white" />
          </button>
        </a>
      </S.LogoContainer>

      <S.BuscaHeader>
        <input type="text" id="txtBusca" placeholder={"Pesquisar prestador"} />
        <img src={procura} id="btnBusca" alt="procura" />
      </S.BuscaHeader>

      <S.ButtonsContainer>
        <a href="/service">Explore</a>

        {!auth ? (
          <a href="/collaboratorRegistrationPage">Preste Serviços</a>
        ) : null}

        {!auth ? (
          <a id="loginButton" href="/login">{isLogged ? <FaBell /> : 'Login'}</a>
        ) : null}

        {!auth ? (
          <Button path="/userRegistrationPage" title="Cadastre-se" ButtonColor="#39C0A8" borderColor="1px solid #33FFDA" textColor="White" borderRadius="76px" buttonWidth="130px"
          />
        ) : null}

        {auth ? <a href="/">Home</a> : null}

        {auth ? (
          <button type="button">
            <img src={Notification} alt="notification-icon" />
          </button>
        ) : null}

        {auth ? (
          <button onClick={navigateToPage} id="perfilButton" type="button">
            <img src={usuario} alt="perfil-icon" />
          </button>
        ) : null}

        {auth ? (
          <button onClick={logout} id="logOffButton" type="button">
            <img src={logOff} alt="logOff-icon" />
          </button>
        ) : null}

      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Navbar
