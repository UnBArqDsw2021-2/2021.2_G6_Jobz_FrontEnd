import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '../../components/Button'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MaterialButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { myServices } from '../../assets/mock/myServicesMock';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Serviço criado em: 22 de janeiro de 2022
      </Typography>
      <Typography variant="h5" component="div">
        Serviço de programação
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Contato: 99913-8934
      </Typography>
      <Typography variant="body2">
        <br />
        {`
          Serviço de programação\n
          
          Atuo na linguagem javascript, tenho portfólio a apresentar, trabalho com microserviços.
        `}
      </Typography>
    </CardContent>
    <CardActions>
      <MaterialButton size="small">Editar</MaterialButton>
      <MaterialButton size="small">Remover</MaterialButton>
    </CardActions>
  </React.Fragment>
);

function MyServicesPage() {
  const [services, setServices] = useState([]);

  // -=-=-=- Load when component is loaded first time -=-=-=-=-
  useEffect(() => {
    console.log('MyServicesPage loaded', myServices.list.rows);
    setServices(myServices.list.rows);

    setTimeout(() => console.log('services', services), 2000);
  }, []);

  return (
    <S.Container>
      <S.body>
        <Navbar home={true} explore={true} notification={true} />
        <S.navigationBar>
          <div id="sideBar">
            <Button
              path="/userProfile"
              title="Perfil"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />
            <Button
              path="/security"
              title="Login e Segurança"
              textColor="gray"
              borderColor="1px solid gray"
            />
            <Button
              path="/myServices"
              title="Meus serviços"
              ButtonColor="#39C0A8"
              textColor="white"
              borderColor="1px solid gray"
            />
            <Button
              path="/"
              title="Pagamentos"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />
            <Button
              path="/"
              title="Notificações"
              ButtonColor="white"
              textColor="gray"
              borderColor="1px solid gray"
            />

          </div>
        </S.navigationBar>

        <S.rightSide>
          <h1> Meus serviços </h1>
          <div id="comando"> Crie, visualize ou delete seus serviços disponíveis abaixo </div>
          <hr />

          <br></br>
          <Button title="Criar novo" />
          <br></br>

          <Box sx={{ minWidth: 275 }}>
            {/* -=-=-=- TODO: Remove mock and integrate list with backend -=-=-=-=- */}
            {/* {services && services.map((o) => {
              <Card variant="outlined">{card}</Card>
            })} */}
            <Card variant="outlined">{card}</Card>
            <Card variant="outlined">{card}</Card>
            <Card variant="outlined">{card}</Card>
          </Box>
        </S.rightSide>
      </S.body>

      <Footer />
    </S.Container>
  )
}

export default MyServicesPage;
