import * as S from './styles'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import sinal from '../../assets/sinal.svg'
import Button from '../../components/Button'
import serviceTI from '../../assets/TiExample.png'


function ExplorePage() {

    const numbers = [1, 2, 3, 4, 5,6,7,8];
    const listItems = numbers.map((number) =>
        <div>
        <img src={serviceTI} alt="imagem do servico"></img>
        <p id="titleService">TITULO</p>
        <p id="descriptionService">Descricao</p>
        </div>
    );

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
                <p id="title">Serviços em geral</p>
                <p id="description">Aqui você encontra todos os serviços cadastrados por nossos prestadores.</p>
                <div id="order-by">
                    <p id="order">Ordernar por:</p>
                    <Button
                        path=""
                        title="Categoria"
                        ButtonColor="#F9F9F9"
                        borderColor="1px solid #E6E6E6"
                        textColor="#252B42"
                        borderRadius="0px"
                        buttonWidth="155px"
                        buttonHeight="58px"
                    />
                </div>
                <div id="serviceList">
                    <li>
                        {listItems}
                    </li>
                </div>
            </header>
        </div>
      </S.Body>     
      <Footer />
      this.percorre()
    </S.Container>
  )
}

export default ExplorePage
