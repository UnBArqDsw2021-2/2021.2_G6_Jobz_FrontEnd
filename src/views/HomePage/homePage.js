import React from 'react'
import Navbar from '../../components/Navbar/navbar';

function HomePage() {
    return (
        <main>
            <Navbar/>
            <h1>
                Pagina inicial da aplicação
            </h1 >
            <links>
                <br></br>
                <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_docs"> Página de documentação</a>
                <br></br>
                <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_FrontEnd"> Página do FrontEnd </a>
                <br></br>
                <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_BackEnd"> Página do BackEnd</a>
            </links>
            <h2>
                <br></br>Botão para entrar na página tal: <button> Click aqui</button>
                <br></br>Botão para entrar na página tal: <button> Click aqui</button>
            </h2>

        </main>
    );
}

export default HomePage