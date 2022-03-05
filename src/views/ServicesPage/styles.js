import styled from 'styled-components'

export const Container = styled.div`
  #header {
    display: flex;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 2rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #fff;
  }

  nav {
    justify-content: space-around;
    height: 5.6rem;
    display: flex;
    align-items: center;
    width: 100%;
  }

  li {
    list-style: none;
  }

  .title {
    text-decoration: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;

    text-align: center;
    letter-spacing: 0.2px;

    color: #2f7b77;
  }

  .container {
    margin-left: 3.4rem;
    margin-right: 3.4rem;
  }

  #divBusca {
    margin-left: 2.56rem;
    background-color: #f5f5f5;
    height: 3.1rem;
    border: 1px solid #dadada;
    border-radius: 0.31rem;
    width: 19.8rem;
  }

  #divBusca2 {
    position: absolute;
    margin-left: -12rem;
    margin-top: 6rem;
    left: 50%;
    top: 148px;
    background-color: #f5f5f5;
    height: 3.31rem;
    border: 1px solid #dadada;
    border-radius: 1.625rem;
    width: 27rem;
  }

  #btnBusca {
    margin-left: 1rem;
    padding-top: 1.0625rem;
  }

  #txtBusca {
    float: right;
    background-color: transparent;
    padding-left: 5px;
    font-family: Montserrat;
    font-size: 14px;
    border: none;
    height: 100%;
    width: 16rem;
    text-indent: 1.5rem;
  }
  #txtBusca1 {
    float: right;
    background-color: transparent;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    border: none;
    height: 100%;
    width: 24rem;
    text-indent: 1.5rem;
  }

  #busca {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 20rem;
    left: 0rem;
    top: 5.8rem;
    p {
      position: absolute;
      margin-left: -6.8rem;
      margin-top: -3.5rem;
      left: 50%;
      top: 148px;

      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      display: flex;
      align-items: center;
      text-align: center;

      color: #f9f9f9;
    }
  }
`
