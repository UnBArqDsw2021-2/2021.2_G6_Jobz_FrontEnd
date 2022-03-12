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
        <p class="pPhone">55 61 992331722</p>
        <p class="pEmail">support@Jobz.agency</p>
      </S.Contact>
      <S.Divider />
      <S.Social>
        <div id="social">
          <a href="https://www.linkedin.com/" class="linkedin">
            <button type="button">
              {' '}
              <img src={Linkedin} id="linkedin" alt="logo linkedin" />
            </button>
          </a>
          <a href="https://twitter.com/" class="twitter">
            <button type="button">
              {' '}
              <img src={Twitter} id="Twitter" alt="logo Twitter" />
            </button>
          </a>
          <a href="https://www.facebook.com/" class="facebook">
            <button type="button">
              {' '}
              <img src={Facebook} id="Facebook" alt="logo Facebook" />
            </button>
          </a>
        </div>
        <div id="product">
          <p class="pProduct">A product of </p>
          <img src={LogoWhite} id="logosmall" alt="logo branca" />
          <p class="pRserved">© 2022 Jobz. All rights reserved</p>

        </div>


      </S.Social>
    </S.Container>
  )
}

export default Footer
