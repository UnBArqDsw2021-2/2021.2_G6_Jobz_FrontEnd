import React from 'react'
import * as S from './styles'
import logo from '../../assets/LogoBlack.svg'
import procura from '../../assets/procura.svg'
import background from '../../assets/service.png'
import ti from '../../assets/TI.png'
import jardinagem from '../../assets/Jardinagem.png'
import encanador from '../../assets/Encanador.png'
import logowhite from '../../assets/LogoWhite.svg'

const ServicesPage = () => (
  <S.Container>
    <header id="header">
      <nav class="container">
        <img src={logo} id="logo" alt="logo" />
        <div id="divBusca">
          <img src={procura} id="btnBusca" alt="procura" />
          <input type="text" id="txtBusca" placeholder="Search" />
        </div>
        <li>
          <a class="title" href="#explore">
            Explore
          </a>
        </li>
        <li>
          <a class="title" href="#prestador">
            Torne-se um<br></br>prestador de
          </a>
        </li>
        <li>
          <a class="title" href="#login">
            login
          </a>
        </li>
      </nav>
    </header>

    <section
      class="section"
      id="search"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div class="container grid">
        <div class="searchBar">
          <p class="encontre">
            Encontre o serviço<br></br>certo para você
          </p>
          <div id="divBusca2">
            <img src={procura} id="btnBusca" alt="procura" />
            <input
              type="text"
              id="txtBusca1"
              placeholder="Busque o que precisar"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="services">
      <div class="container grid">
        <div class="text">
          <p>Serviços Populares</p>
        </div>
        <div class="box">
          <img src={ti} id="ti" alt="imagem tecnico em ti" />
          <br></br>
          <span>Assistência em TI</span>
        </div>
        <div class="box">
          <img src={encanador} id="encanador" alt="imagem encanador" />
          <br></br>
          <span> Encanadores</span>
        </div>
        <div class="box">
          <img src={jardinagem} id="jardinagem" alt="imagem jardineiro" />
          <br></br>
          <span> Jardineiros</span>
        </div>
      </div>
    </section>
    <section class="section" id="footer">
      <div class="container grid">
        <img src={logowhite} id="logowhite" alt="logo branca" />
        <div class="contact">
          <p>+1 (2345) 678-90-12</p>
          <p>support@personal.com</p>
        </div>
      </div>
    </section>
  </S.Container>
)

export default ServicesPage
