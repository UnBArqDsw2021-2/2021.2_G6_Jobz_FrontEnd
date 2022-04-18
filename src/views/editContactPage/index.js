import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { postContactProvider } from '../../services/api'

function EditContactPage() {
    const [form, setForm] = useState({
        name: null,
        description: null,
        presentationPhoto: null,
    });

    function onSubmitForm(e) {
        console.log("form description", form.description)
        console.log("form name", form.name)
        console.log("photo", form.presentationPhoto)
        postContactProvider(form.name, form.description, form.presentationPhoto)
    }

    function onFormChange(e) {

        const newdata = { ...form }
        newdata[e.target.id] = e.target.value
        setForm(newdata)
        console.log(newdata)
    }

    return (
        <S.Container>
            <S.body>
                <Navbar home={true} explore={true} notification={true} />
                <S.navigationBar>
                    <div className='sideBar'>
                        <Button path="/" title="Perfil" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
                        />
                        <Button path="/security" title="Login e Segurança" ButtonColor="white" textColor="gray" borderColor="1px solid gray"
                        />
                        <Button path="/editContactPage" title="Página do Prestador" ButtonColor="#39C0A8" textColor="white" borderColor="1px solid #33FFDA"
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
                    <h1> Contato do Prestador de Serviço </h1>
                    <div className='comando'> Atualize suas informações abaixo </div>
                    <hr />

                    <div className="addfile">
                        Adicione uma imagem de perfil
                        <br></br>
                        <input id="presentationPhoto" type="file" onChange={e => onFormChange(e)} ></input>
                    </div>
                    <br></br>
                    <br></br>
                    Nome:
                    <Input
                        onChange={e => onFormChange(e)}
                        id="name"
                        placeholder="Digite o nome aqui..."
                        type="text"
                        color="red"
                    />

                    Descrição:
                    <br></br>
                    <textarea
                        onChange={e => onFormChange(e)}
                        id="description"
                        placeholder="Digite aqui o que você sabe fazer..."
                        color="red"
                    />

                    <Button type="submit" onClick={() => onSubmitForm()} title="Enviar" />
                </S.rightSide>
            </S.body>

            <Footer />
        </S.Container>
    )
}

export default EditContactPage
