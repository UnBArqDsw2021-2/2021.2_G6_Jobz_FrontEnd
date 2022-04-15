import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import sinal from '../../assets/sinal.svg'
import Button from '../../components/Button'
import serviceTI from '../../assets/TiExample.png'
import Diarista from '../../assets/Diarista.png'
import Encanador from '../../assets/Encanador.png'
import Pedreiro from '../../assets/pedreiro.png'
import { api } from '../../services/api'
import React, { useEffect, useState } from "react";


function ExploreRegistrationPage() {
  function ocuppation(e){
    if (e===0){
      return "Diarista"
    }
    else if(e===1){
      return "Encanador"
    }
    else if(e===2){
      return "Pedreiro"
    }
    else{
      return "Tecnico"
    }
  }

  function image(e){
    if (e===0){
      return Diarista
    }
    else if(e===1){
      return Encanador
    }
    else if(e===2){
      return Pedreiro
    }
    else{
      return serviceTI
    }
  }
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/provider")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  let i=0;
  //console.log(user?.length)
  function listItems ()
  {
        return listItems= user?.map((number)  => 
        {if(user?.[i++].occupation===3)
        {
        return(
        <div>
          <img src={image(user[i-1]?.occupation)} alt=""></img>
          <p id="titleService"> Nome do prestador: {user[i-1]?.name}</p>
          <p id="descriptionService">Serviço: {ocuppation(user[i-1]?.occupation)}</p>
        </div>  
        )
        }
        }
        );
  }

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
                <p id="title">Serviços de TI</p>
                <p id="description">Aqui você pode encontrar os melhores jardineiros.</p>
                <div id="order-by">
                    <p id="order">Ordernar por:</p>
                    <Button
                        path=""
                        title="Popularidade"
                        ButtonColor="#F9F9F9"
                        borderColor="1px solid #E6E6E6"
                        textColor="#252B42"
                        borderRadius="0px"
                        buttonWidth="155px"
                        buttonHeight="58px"
                    />
                </div>
                <div id="serviceList">
                    <li>
                        {listItems()}
                    </li>
                </div>
            </header>
        </div>
      </S.Body>     
      <Footer />
    </S.Container>
  )
}

export default ExploreRegistrationPage
