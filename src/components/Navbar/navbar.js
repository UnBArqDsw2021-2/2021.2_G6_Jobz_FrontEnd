import React from 'react'
import * as S from './styles'
import { FaBell } from 'react-icons/fa'
import LogoWhite from '../../assets/LogoWhite.svg'
import procura from '../../assets/procura.svg'

const isLogged = false

function Navbar(props) {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={LogoWhite} alt="logo-white" />
      </S.LogoContainer>
      <S.BuscaHeader>
        <img src={procura} id="btnBusca" alt="procura" />
        <input type="text" id="txtBusca" placeholder="Search" />
      </S.BuscaHeader>
      <S.ButtonsContainer>
        <a href="/">Explore</a>
        <a href="/">
          Torne-se um prestador
          <br /> de serviços
        </a>
        <a href="/">{isLogged ? <FaBell /> : 'Login'}</a>
        <a href="/userRegistrationPage">Cadastre-se</a>
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Navbar
