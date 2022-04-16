import React from "react";
import * as S from "./styles";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import user from "../../assets/usuario.png";
import hireImage from "../../assets/hireButtonImage.png";
import Button from "../../components/Button";

function collaboratorContactPage() {

  function getUser() {
    console.log("Entrou no getNew USer")
    axios.get(url)
      .then(response => { //se der tudo certo entra aqui
        console.log(response)
        const data = response.data
      })
      .catch(error => console.log(error)) // se der ruim entra aqui
  }
  
  return (
    <S.Container>
      <Navbar explore={true} login={true} preste={true} cadastre={true} />

      <h1>Nome do Usuário</h1>

      <S.body>
        <S.LeftSide>
          <S.description>
            <h3>Informações sobre o serviço</h3>

            <info>
              Lorem ipsum dolor sit amet. Est corporis ipsa ut ratione quia ea
              praesentium galisum qui recusandae nobis et exercitationem beatae.
              Sit perferendis rerum aut odit veniam est consequuntur quia est
              facere dolores est quas animi ut quia dolores et omnis sunt? Cum
              voluptas distinctio quo asperiores maiores ut culpa eaque At
              doloremque sapiente aut minus magni ad error beatae. Sit molestiae
              nesciunt et quae dolor in quas maiores aut veniam nobis. Eos
              reprehenderit quisquam sed dolor tempore aut exercitationem
              officia et nulla enim et quod ullam sed molestias voluptas eum
              magni accusamus. Sit dolor provident sed quis consequatur et
              maxime sint qui nisi corporis qui eaque placeat sit quia adipisci
              ut minima dolore? Qui consequuntur consequuntur est totam corrupti
              est debitis ipsa id officia mollitia et magni modi et explicabo
              possimus. Eum praesentium repudiandae et laudantium suscipit nam
              molestiae omnis quo unde accusantium ut autem corporis et tempore
              provident. Sit temporibus tempore quo possimus reiciendis sed quam
              fugit eum labore velit!
            </info>
          </S.description>
        </S.LeftSide>
        <S.RightSide>
          <S.UserInfo>
            <img src={user} id="user" alt="image of user" />

            <infoImage>
              <name> Nome do Usuário </name>
              <ocupation> Ocupação </ocupation>
            </infoImage>
          </S.UserInfo>

          {/* <S.hireButton> */}
          {/* <img src={hireImage} id='hireButton' alt='image of the hire button'></img> */}
          {/* <p> Marque um horário </p> */}
          {/* </S.hireButton> */}

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

export default collaboratorContactPage;
