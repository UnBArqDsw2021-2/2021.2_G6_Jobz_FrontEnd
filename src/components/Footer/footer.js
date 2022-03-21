import React from 'react'
import * as S from './styles'
import LogoWhite from '../../assets/LogoWhite.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Twitter from '../../assets/Twitter.svg'
import Facebook from '../../assets/Facebook.svg'

function Footer(props) {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={LogoWhite} id="logowhite" alt="logo branca" />
      </S.LogoContainer>

      <S.Contact>
        <p class="pEmail">support@Jobz.agency</p>
      </S.Contact>

      <S.Repositories>
        <p>Links:</p>
        <a id="documentacao" href="https://unbarqdsw2021-2.github.io/2021.2_G6_Jobz_docs/#/"> {' '}Documentação do Jobz</a>
        <br></br> <br></br>
        <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_FrontEnd"> {' '} Repositório do FrontEnd</a>
        <br></br> <br></br>
        <a href="https://github.com/UnBArqDsw2021-2/2021.2_G6_Jobz_BackEnd"> {' '} Repositório do BackEnd</a>
      </S.Repositories>

      <S.Divider />

      <S.Social>
        <div id="social">

          <a href="https://www.linkedin.com/" class="linkedin" >
            <button type="button">
              {' '}
              <img src={Linkedin} id="linkedin" alt="logo linkedin" />
            </button>
          </a>
          <a href="https://twitter.com/" class="twitter">
            <button type="button">
              {' '}
              <img src={Twitter} id="twitter" alt="logo Twitter" />
            </button>
          </a>

          <a href="https://www.facebook.com/" class="facebook">
            <button type="button">
              {' '}
              <img src={Facebook} id="facebook" alt="logo Facebook" />
            </button>
          </a>
            <p class="pProduct">A product of </p>
            <p class="pRserved">© 2022 Jobz. All rights reserved</p>
        </div>
        <img src={LogoWhite} id="logosmall" alt="logo branca" />
      </S.Social>
    </S.Container>
  )
}

export default Footer
