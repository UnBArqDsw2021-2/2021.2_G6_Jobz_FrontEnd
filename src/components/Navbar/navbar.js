import React from 'react'
import * as S from './styles'
import { FaBell } from 'react-icons/fa'
import LogoWhite from '../../assets/LogoWhite.svg'
import procura from '../../assets/procura.svg'
import Button from '../../components/ButtonForRegistration/index'

function Navbar(props) {

  const isLogged = false

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
        <a href="/">Explore</a>

        <a href="/collaboratorRegistrationPage">
          Torne-se um prestador
          <br /> de serviços
        </a>

        <a href="/login">{isLogged ? <FaBell /> : 'Login'}</a>

        <Button onClick='/userRegistrationPage' title="Cadastre-se" ButtonColor="#39C0A8" borderColor="1px solid #33FFDA" fontColor='White' borderRadius="76px" />
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Navbar
