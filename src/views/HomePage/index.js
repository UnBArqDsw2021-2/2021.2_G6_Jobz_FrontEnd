import React, { useContext } from 'react'
import * as S from './styles'
import procura from '../../assets/procura.svg'
import background from '../../assets/service.png'
import ti from '../../assets/TI.png'
import jardinagem from '../../assets/Jardinagem.png'
import encanador from '../../assets/Encanador.png'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import Button from '../../components/Button/index'
import { AuthContext } from '../../context/auth'

function HomePage() {

  const { authenticated } = useContext(AuthContext);

  return (
    <S.Container>
      <Navbar />

      <section
        className="section"
        id="search"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container grid">
          <div className="searchBar">
            <p className="encontre">
              {' '}
              Encontre o serviço<br></br>certo para você{' '}
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

      <section className="section" id="services">
        <div className="container grid">
          <div className="text">
            <p>Serviços Populares</p>
          </div>

          <div className="box">
            <a href="/exploreTI"><img src={ti} id="ti" alt="imagem tecnico em ti" /></a>
            <br></br>
            <span>Assistência em TI</span>
          </div>

          <div className="box">
            <a href="/explorePlumber"><img src={encanador} id="encanador" alt="imagem encanador" /></a>
            <br></br>
            <span> Encanadores</span>
          </div>

          <div className="box">
            <a href="/exploreGardener"><img src={jardinagem} id="jardinagem" alt="imagem jardineiro" /></a>
            <br></br>
            <span> Jardineiros</span>
          </div>
        </div>
      </section>

      <section className="section" id="jobzInfo">
        <p>
          O Jobz é uma plataforma que tem como objetivo facilitar o encontro e
          <br />
          interação de prestadores de seriços com seus respectivos clientes.
        </p>


        {!localStorage.getItem("loggedUser") ? (
          <Button
            path="/userRegistrationPage"
            title="Cadastre-se"
            ButtonColor="#39C0A8"
            borderColor="1px solid #33FFDA"
            textColor="White"
            borderRadius="76px"
            buttonWidth="130px"
          />
        ) : null}

      </section>

      <section id="titleCategories">Categorias populares</section>

      <div id="popCategories">
        <section className="section" id="popularCategories">
          <p> Diarista</p>
          <p> Encanador </p>
          <p> Jardineiro </p>
        </section>

        <section className="section" id="popularCategories">
          <p> Limpeza de Fossa </p>
          <p> Serviço em TI </p>
          <p> Conserta Eletrônicos </p>
        </section>

        <section className="section" id="popularCategories">
          <p> Pedreiro </p>
          <p> Mecânico </p>
          <p> Cozinheiro </p>
        </section>
      </div>
      <Footer />
    </S.Container>
  )
}

export default HomePage
