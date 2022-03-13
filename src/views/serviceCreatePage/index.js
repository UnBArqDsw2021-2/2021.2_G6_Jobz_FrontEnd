import React, { useState } from 'react'
import Button from '../../components/Button'
import logo from '../../assets/logo.svg'
import Input from '../../components/Input'
import * as S from './styles'

function ServiceCreatePage() {
  const [form, setForm] = useState({
    categroy: null,
    name: null,
    description: null
  })

  return (
    <S.Container>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <form>
        <Input placeholder="CATEGORIA" type="text" required />
        <Input placeholder="TÍTULO" type="text" required />
        <Input placeholder="DESCRIÇÃO" type="textarea" required />
        <br></br>
        <Button type="submit" title={'CADASTRAR SERVIÇO'} />
      </form>
    </S.Container>
  )
}

export default ServiceCreatePage
