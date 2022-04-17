import * as S from './styles'
import React, { useEffect, useState } from "react";
import Navbar from '../../../components/Navbar/navbar'
import Footer from '../../../components/Footer/footer'
import sinal from '../../../assets/sinal.svg'
import Select from 'react-select';
import serviceTI from '../../../assets/TiExample.png'
import Diarista from '../../../assets/DiaristaExample.png'
import Encanador from '../../../assets/EncadorExample.png'
import Pedreiro from '../../../assets/Pedreiro.png'
import Button from '../../../components/Button/index'
import { api } from '../../../services/api'
import { useNavigate } from 'react-router-dom'

function ExplorePage() {

  const [user, setUser] = useState();
  let navigate = useNavigate()
  let i = 0;

  useEffect(() => {
    api
      .get("/provider")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  const listItems = user?.map((number) =>
    <div >
      <button id="1" onClick={navigateToPage} className="imagesButton"> 
      <img src={image(user[i]?.occupation)} alt="Imagem da ocupacao"></img>
      </button>
      <p id="titleService"> Prestador: {user[i]?.name}</p>
      <p id="descriptionService">Serviço: {ocuppation(user[i++]?.occupation)}</p>
    </div>

  );

  function navigateToPage() {
    navigate("/collaboratorContactPage")
  }


  const content = [
    {
      value: 1,
      label: <Button
        path="/exploreDayLabore"
        title="Diarista"
        ButtonColor="transparent"
        borderColor="white"
        textColor="black"
        borderRadius="0px"
        buttonWidth="100%"
        buttonHeight="100%"
        boxShadow="0px"
      />
    },
    {
      value: 2,
      label: <Button
        path="/explorePlumber"
        title="Encanador"
        ButtonColor="transparent"
        borderColor="white"
        textColor="black"
        borderRadius="0px"
        buttonWidth="100%"
        buttonHeight="100%"
        boxShadow="0px"
      />
    },
    {
      value: 3,
      label: <Button
        path="/exploreBricklayer"
        title="Pedreiro"
        ButtonColor="transparent"
        borderColor="white"
        textColor="black"
        borderRadius="0px"
        buttonWidth="100%"
        buttonHeight="100%"
        boxShadow="0px"
      />
    },
    {
      value: 4,
      label: <Button
        path="/exploreTI"
        title="Tecnico"
        ButtonColor="transparent"
        borderColor="white"
        textColor="black"
        borderRadius="0px"
        buttonWidth="100%"
        buttonHeight="100%"
        boxShadow="0px"
      />
    }
  ]

  function ocuppation(e) {
    if (e === 1) {
      return "Diarista"
    }
    else if (e === 2) {
      return "Encanador"
    }
    else if (e === 3) {
      return "Pedreiro"
    }
    else if (e === 4) {
      return "Tecnico"
    }
  }

  function image(e) {
    if (e === 1) {
      return Diarista
    }
    else if (e === 2) {
      return Encanador
    }
    else if (e === 3) {
      return Pedreiro
    }
    else if (e === 4) {
      return serviceTI
    }
  }



  //<p>Usuário: {user[0]?.name}</p>

  return (
    <S.Container>
      <Navbar />
      <S.Body>
        <div id="GroupInformation">
          <header>
            <div id="link">
              <a href="/">Home</a>
              <img src={sinal} alt="sinal maior"></img>
              <p id="service">Serviços de TI</p>
            </div>
            <p id="title">Serviços em geral</p>
            <p id="description">Aqui você encontra todos os serviços cadastrados por nossos prestadores.</p>
            <div id="order-by">
              <p id="order">Ordernar por:</p>
              <Select id="occupation" placeholder="Selecione a Ocupação" options={content} required />
            </div>
            <div id="serviceList">
              <li key="{listItems}">
                {listItems}
              </li>
            </div>
          </header>
        </div>
      </S.Body>
      <Footer />
    </S.Container>
  )
}

export default ExplorePage
