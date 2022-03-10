import React from 'react'
import * as S from './styles'
import procura from '../../assets/procura.svg'
import background from '../../assets/service.png'
import ti from '../../assets/TI.png'
import jardinagem from '../../assets/Jardinagem.png'
import encanador from '../../assets/Encanador.png'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'

const ServicesPage = () => (
  <S.Container>
    <Navbar />
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
          <div id="divBuscaSearch">
            <img src={procura} id="btnBuscaSearch" alt="procura" />
            <input
              type="text"
              id="txtBuscaSearch"
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
    <Footer />
  </S.Container>
)

export default ServicesPage
