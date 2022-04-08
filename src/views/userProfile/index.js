import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { Axios } from 'axios'

function UserRegistrationPage() {
  const [form, setForm] = useState({
    name: null,
    cpf: null,
    email: null,
    phone: null,
  });

  function onSubmitForm() {
    console.log(form);
    // TODO: Integrar com axios pra mandar as informações atualizadas desse usuário em uma rota de atualização autenticada 
  }

  function onFormChange(e) {
    const newdata = { ...form }
    newdata[e.target.id] = e.target.value
    setForm(newdata)
  }

  useEffect(() => {
    // TODO: Pegar informações do back pela rota que pega os dados do usuário que está autenticado
  });

  return (
    <S.Container>
      <S.body>
        <Navbar home={true} explore={true} notification={true} />
        <S.navigationBar>
          <sideBar>
            <Button path="/" title="Perfil" ButtonColor="#39C0A8" textColor="white" borderColor="1px solid #33FFDA"
            />
            <Button path="/security" title="Login e Segurança" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
            />
            <Button path="/" title="Pagamentos" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
            />
            <Button path="/" title="Notificações" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
            />
          </sideBar>
        </S.navigationBar>

        <S.rightSide>
          <h1> Perfil do usuário </h1>
          <comando> Atualize suas informações abaixo </comando>
          <hr />
          <addfile>
            Adicione uma imagem de perfil
            <input type="file"></input>
          </addfile>
          <br></br>
          <br></br>
          Nome:
          <Input 
            onChange={e => onFormChange(e)}
            id="name"
            value={form.name}
            placeholder="Digite o nome aqui..."
            type="text"
            color="red"
          />
          Cpf:
          <Input 
            onChange={e => onFormChange(e)}
            id="cpf"
            value={form.cpf}
            placeholder="Digite o cpf aqui..."
            type="text"
            color="red"
          />
          Email:
          <Input 
            onChange={e => onFormChange(e)}
            id="email"
            value={form.email}
            placeholder="Digite o email aqui..."
            type="text"
            color="red"
            disabled
          />
          Telefone:
          <Input 
            onChange={e => onFormChange(e)}
            id="phone"
            value={form.phone}
            placeholder="Digite o telefone aqui..."
            type="text"
            color="red"
          />
          <br></br>
          <Button onClick={() => onSubmitForm() }title="Enviar" />
        </S.rightSide>
      </S.body>

      <Footer />
    </S.Container>
  )
}

export default UserRegistrationPage
