import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import sinal from '../../assets/sinal.svg'
import Button from '../../components/Button'

function ExploreRegistrationPage() {

  return (
    <S.Container>
      <Navbar />
      <S.Body>
        <div id="GroupInformation">
            <header>
                <div id="link">
                    <a href="/">Home</a>
                    <img src={sinal} alt="sinal maior"></img>
                    <p id="service">Serviços de TI</p>
                </div>
                <p id="title">Serviços de TI</p>
                <p id="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <div id="order-by">
                    <p id="order">Ordernar por:</p>
                    <Button
                        path=""
                        title="Popularidade"
                        ButtonColor="#F9F9F9"
                        borderColor="1px solid #E6E6E6"
                        textColor="#252B42"
                        borderRadius="0px"
                        buttonWidth="155px"
                        buttonHeight="58px"
                    />
                </div>
            </header>
        </div>
      </S.Body>     
      <Footer />
    </S.Container>
  )
}

export default ExploreRegistrationPage
