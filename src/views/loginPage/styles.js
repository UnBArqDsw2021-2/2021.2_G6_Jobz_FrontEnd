import styled from 'styled-components'

export const Container = styled.div``

export const RegistrationButton = styled.a`
  font-family: Montserrat;
  margin-top: 20px;
  font-size: 15px;
`
export const Body = styled.div`
  height: 450px;
  flex-direction: column;
  display: flex;
  background-color: #fff;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;

  #GroupForm {
    height: 390px;
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 370px;
    background-color: #f9f9f9;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15), -4px -4px 4px #ffffff;
    border-radius: 10px;
  }

  header {
    margin-top: 12px;
    margin-bottom: 40px;
    caret-color: transparent;

    img {
      background-color: #f9f9f9;
      height: 61px;
      widht: 114px;
      justify-content: center;
      margin-left: 2.2rem;
    }
  }

  form {
    padding: 0 1rem;
    background-color: #f9f9f9;
    justifycontent: 'space-between';
    margin-top: 0.3125rem;
  }

  Button {
    margin-top: 40px;
  }

  a {
    margin-left: 65px;
    padding-left: 34px;
    color: #e38233;
  }
`
