import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { getUsers, updateUser } from '../../services/api';

function UserRegistrationPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: null,
    phone: null,
  });

  async function onSubmitForm() {
    setLoading(true);

    // if (form.password === null || (form.password && form.password.length < 8)) {
    //   alert('A nova senha deve ser maior que 8 caracteres!');
    //   return;
    // }

    try {
      const userCpf = localStorage.getItem('userCpf');
      const response = await updateUser(userCpf, form);

      alert('Usuário atualizado com sucesso!');
    } catch (err) {
      console.log(err);
      alert('Ops... Ocorreu um erro ao atualizar os dados!');
    }
  }

  function onFormChange(e) {
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
          phone: data[0].phone,
        });
      } catch (err) {
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
          <div id="sideBar">
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
          </div>
        </S.navigationBar>

        <S.rightSide>
          <h1> Perfil do usuário </h1>
          <div id="comando"> Atualize suas informações abaixo </div>
          <hr />
          <div id="addfile">
            Adicione uma imagem de perfil
            <input type="file"></input>
          </div>

          <div id="Name">
            <p>Nome:</p>
            <Input
              onChange={e => onFormChange(e)}
              id="name"
              value={form.name}
              placeholder="Digite o nome aqui..."
              type="text"
              color="red"
            />
          </div>

          <div id="Telephone">
            <p>Telefone:</p>
            <Input
              onChange={e => onFormChange(e)}
              id="phone"
              value={form.phone}
              placeholder="Digite o telefone aqui..."
              type="text"
              color="red"
            />
          </div>
          <br></br>
          <Button onClick={() => onSubmitForm()} title="Enviar" />
        </S.rightSide>
      </S.body>

      <Footer />
    </S.Container>
  )
}

export default UserRegistrationPage
