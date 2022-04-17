import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import user from "../../assets/usuario.png";
import hireImage from "../../assets/hireButtonImage.png";
import api from '../../services/api'

function CollaboratorContactPage() {

  const [contactInfo, setContactInfo] = useState();
  const [cpf, setCpf] = useState();
  const [providers, setProviders] = useState([]);
  var occupation;
  var provider = [];

  useEffect(() => {
    async function contactProvider() {
      const request = await api.get("/providerPresentation/")
        .then(request =>
          setContactInfo(request.data[1],
            setCpf(request.data[1].provider)))
        .catch(error => console.log(error))

      return request;
    }

    async function fetchProviders() {
      const request = await api.get("/provider/")
        .then(request => setProviders(request.data))
        .catch(error => console.log(error))
    }

    fetchProviders();
    contactProvider();
  }, []); //só vai executar uma vez


  // faz um loop por todos os providers, porem se o provider tiver o cpf igual a cpf então printa
  providers.map((prov) => {
    if (prov.cpf === cpf) {
      provider = prov;
    }
  })

  if (provider.occupation == 1) {
    occupation = "Encanador";
  } else if (provider.occupation == 2) {
    occupation = "Diarista";
  } else if (provider.occupation == 3) {
    occupation = "Pedreiro";
  } else if (provider.occupation == 4) {
    occupation = "Técnico";
  }

  return (
    <S.Container>
      <Navbar />
      <h1>{provider.name}</h1>

      <S.body>
        <S.LeftSide>
          <S.description>
            <h3>Informações sobre o serviço</h3>

            <div className="description">
              {contactInfo ? contactInfo.description : "DESCRIPTION"}

            </div>
          </S.description>
        </S.LeftSide>
        <S.RightSide>
          <S.UserInfo>
            <img src={!contactInfo ? user : contactInfo.presentationPhoto != null ? contactInfo.presentationPhoto : user} id="user" alt="image of user" />

            <div className='provider'>
              <div className="name"> {provider.name} </div>
              <div className="occupation"> {occupation} </div>
            </div>
          </S.UserInfo>

          <button id="button" title={" Marque um horário"}>
            <img
              src={hireImage}
              id="hireButton"
              alt="image of the hire button"
            ></img>
            <p> Marque um horário </p>
          </button>
        </S.RightSide>
      </S.body>
      <Footer />
    </S.Container>
  );
}

export default CollaboratorContactPage;
