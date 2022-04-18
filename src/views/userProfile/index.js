import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { getUsers } from '../../services/api';

function UserRegistrationPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: null,
    cpf: null,
    email: null,
    phone: null,
  });

  async function onSubmitForm() {
    setLoading(true);
    
    try {
      const response = await updateUser({ cpf });

      setForm({
        name: data[0].name,
        email: data[0].email,
        cpf: data[0].cpf,
        phone: data[0].phone,
      });
    } catch (err) {
      console.log(err);
      alert('Ops... Ocorreu um erro ao carregar os dados!');
    }
  }

  function onFormChange(e) {
    console.log(e.target.id);
    console.log(e.target.value);
    const newdata = { ...form }
    newdata[e.target.id] = e.target.value
    setForm(newdata)
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      const cpf = localStorage.getItem('userCpf');
      
      try {
        const { data } = await getUsers({ cpf });

        setForm({
          name: data[0].name,
          email: data[0].email,
          cpf: data[0].cpf,
          phone: data[0].phone,
        });
      } catch (err) {
        console.log(err);
        alert('Ops... Ocorreu um erro ao carregar os dados!');
      }

      setLoading(false);
    }

    if (!form.name) loadData();
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
            <Button path="/myServices" title="Meus serviços" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
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
          <Button onClick={() => onSubmitForm()} title="Enviar" />
        </S.rightSide>
      </S.body>

      <Footer />
    </S.Container>
  )
}

export default UserRegistrationPage
