import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import user from "../../assets/usuario.png";
import hireImage from "../../assets/hireButtonImage.png";
import api from '../../services/api'
import { useLocation } from 'react-router-dom';


function CollaboratorContactPage() {

  const [contactInfo, setContactInfo] = useState([]);
  const location = useLocation();
  var occupation;
  var provider = [];

  useEffect(() => {
    async function contactProvider() {
      const request = await api.get("/providerPresentation/")
        .then(request => setContactInfo(request.data))
        .catch(error => console.log(error))

      return request;
    }

    contactProvider();
  }, []); //só vai executar uma vez


  // faz um loop por todos os providers, porem se o provider tiver o cpf igual a cpf então printa
  contactInfo.map((prov) => {
    if (prov.provider === location.state.cpf) {
      provider = prov;
    }

  })

  if (location.state.occupation == 1) {
    occupation = "Diarista";
  } else if (location.state.occupation == 2) {
    occupation = "Encanador";
  } else if (location.state.occupation == 3) {
    occupation = "Pedreiro";
  } else if (location.state.occupation == 4) {
    occupation = "Técnico";
  }

  return (
    <S.Container>
      <Navbar />
      <h1>{location.state.name}</h1>

      <S.body>
        <S.LeftSide>
          <S.description>
            <h3>Informações sobre o serviço</h3>

            <div className="description">
              {provider.length === 0 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod vehicula porta. Vestibulum vitae condimentum ipsum. Fusce pellentesque odio metus, non viverra est efficitur eget. Donec finibus lobortis lobortis. Sed interdum nec dui ut commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean cursus, lorem et dignissim finibus, lorem leo faucibus ligula, vitae aliquam dolor risus et velit. Vivamus et massa fringilla, auctor nulla sit amet, tempor nisi. Nam egestas fringilla sem id sagittis. Integer porta sed tellus sodales porta. Nullam in nisi finibus, sagittis nunc eget, efficitur sem.Cras auctor, nibh et feugiat accumsan, arcu lorem laoreet mi, in viverra sapien nibh in eros.Duis imperdiet malesuada nulla, at pretium tellus condimentum non.Integer bibendum condimentum erat, quis mollis ex scelerisque sit amet.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Cras sed rhoncus mi.Sed viverra eget metus eu efficitur.Interdum et malesuada fames ac ante ipsum primis in faucibus.Cras venenatis euismod ante.Morbi dapibus bibendum lacus, nec euismod elit consectetur ac.Suspendisse id finibus augue.Fusce tincidunt ligula eu ligula suscipit, in suscipit dui consequat.Donec varius lectus at libero rhoncus, at feugiat sapien efficitur." : provider.description }

            </div>
          </S.description>
        </S.LeftSide>
        <S.RightSide>
          <S.UserInfo>
            <img src={provider.length === 0 ? user : provider.presentationPhoto} id="user" alt="image of user" />

            <div className='provider'>
              <div className="name"> {location.state.name} </div>
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
