import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import sinal from '../../assets/sinal.svg'
import Button from '../../components/Button'

function ExplorePageJardineiro() {

  return (
    <S.Container>
      <Navbar />
      <S.Body>
        <div id="GroupInformation">
            <header>
                <div id="link">
                    <a href="/">Home</a>
                    <img src={sinal} alt="sinal maior"></img>
                    <p id="service">Serviços de Jardinagem</p>
                </div>
                <p id="title">Serviços de Jardinagem</p>
                <p id="description">Aqui você pode encontrar os melhores jardineiros.</p>
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

export default ExplorePageJardineiro
