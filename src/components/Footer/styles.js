import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  left: 0rem;
  right: 0rem;
  height: 230px;
  display: flex;
  background: linear-gradient(90deg, #05323a 8.37%, #1e696c 85.15%);
`
export const LogoContainer = styled.div`
  width: 81px;
  height: 37.99px;
  margin-top: 20px;
  display: flex;
  margin-left: 172px;
`

export const Contact = styled.div`
  margin-left: -105px;
  width: 161.37px;
  height: 46.82px;
  padding-top: 57px;
  p.pPhone {
    height: 6px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 20px;

    color: #ffffff;
  }
  p.pEmail {
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
  }
`

export const Repositories = styled.div`
display: column;
position: absolute;
left: 40%;
width: 200px;
margin-top: 35px;
opacity: 0.9;

a{
    color:white;
}
`

export const Divider = styled.div`
  position: absolute;
  left: 10.81%;
  right: 4.6%;
  margin-top: 150px;
  background: #ffffff;
  opacity: 0.2;

  border: 1px solid #ffffff;
`
export const Social = styled.div`
  display: flex;
  margin-left: -200px;
  margin-top: 170px;
  widht: 100%;
  height: 37.69px;

  a {
    padding-left: 1px;
  }

  color: transparent;

  button {
    border-radius: 50%;
    background-color: transparent;
    border-color: transparent;
    height: 37px;
    width: 50px;
    cursor: pointer;
    justify-content: center;
    

  }
  #product {
    align-items: center;
    #logosmall {
      position: absolute;
      margin-top: -2.4rem;
      align-items: center;
      margin-left: 26.5rem;
      widht: 3.1rem;
      height: 1.4rem;

    }
  }
  p.pProduct {
    margin-left: 312px;
    width: 133px;
    height: 19px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 16px;
    color: #fff;

  }
  p.pRserved {
    margin-top: -35px;
    width: 250px;
    height: 15px;
    margin-left: 640px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 16px;
    color: #fff;
  }
`
