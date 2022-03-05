import React from 'react'
import * as S from './styles'
import logo from '../../assets/LogoBlack.svg'
import procura from '../../assets/procura.svg'
import background from '../../assets/servico.svg'

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
      id="busca"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div class="searchBar">
        <p>
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
    </section>
  </S.Container>
)

export default ServicesPage
