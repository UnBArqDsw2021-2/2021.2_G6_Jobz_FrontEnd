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
          setContactInfo(request.data[0],
            setCpf(request.data[0].provider)))
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
      <h1>{provider? provider.name: "Lorem ipsum"}</h1>

      <S.body>
        <S.LeftSide>
          <S.description>
            <h3>Informações sobre o serviço</h3>

            <div className="description">
              {contactInfo ? contactInfo.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod vehicula porta. Vestibulum vitae condimentum ipsum. Fusce pellentesque odio metus, non viverra est efficitur eget. Donec finibus lobortis lobortis. Sed interdum nec dui ut commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean cursus, lorem et dignissim finibus, lorem leo faucibus ligula, vitae aliquam dolor risus et velit. Vivamus et massa fringilla, auctor nulla sit amet, tempor nisi. Nam egestas fringilla sem id sagittis. Integer porta sed tellus sodales porta. Nullam in nisi finibus, sagittis nunc eget, efficitur sem.Cras auctor, nibh et feugiat accumsan, arcu lorem laoreet mi, in viverra sapien nibh in eros.Duis imperdiet malesuada nulla, at pretium tellus condimentum non.Integer bibendum condimentum erat, quis mollis ex scelerisque sit amet.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Cras sed rhoncus mi.Sed viverra eget metus eu efficitur.Interdum et malesuada fames ac ante ipsum primis in faucibus.Cras venenatis euismod ante.Morbi dapibus bibendum lacus, nec euismod elit consectetur ac.Suspendisse id finibus augue.Fusce tincidunt ligula eu ligula suscipit, in suscipit dui consequat.Donec varius lectus at libero rhoncus, at feugiat sapien efficitur."}

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
