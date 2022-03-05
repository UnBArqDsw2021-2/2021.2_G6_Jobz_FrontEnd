import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  let navigate = useNavigate()

  function navigateToUserRegistration() {
    navigate('/userRegistrationPage')
  }
  function ServicesPage() {
    navigate('/ServicesPage')
  }

  return (
    <main>
      <h1>Pagina inicial da aplicação</h1>
      <links>
        <br></br>
        <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_docs">
          {' '}
          Página de documentação
        </a>
        <br></br>
        <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_FrontEnd">
          {' '}
          Página do FrontEnd{' '}
        </a>
        <br></br>
        <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_BackEnd">
          {' '}
          Página do BackEnd
        </a>
      </links>
      <h2>
        <br></br>Botão para a página de cadastro
        <button onClick={navigateToUserRegistration}> Click aqui</button>
        <br></br>Botão para entrar na página services:{' '}
        <button onClick={ServicesPage}> Click aqui</button>
      </h2>
    </main>
  )
}

export default HomePage
