import styled from 'styled-components'

export const Container = styled.div`
  #header {
    display: flex;
    border-bottom: 2px solid #2f7b77;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #fff;
  }

  nav {
    height: 5.6rem;
    justify-content: space-around;
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
    top: 11rem;
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
    border-radius: 1.625rem;
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

  #search {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 28rem;
    left: 0rem;
    top: 5.2rem;
    p {
      position: absolute;
      margin-left: -6.8rem;
      margin-top: -3.5rem;
      left: 50%;
      top: 12rem;

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
  #services {
    display: flex;
    background-color: #fff;
    margin-top: 33.2rem;
    height: 33rem;
  }
  #services div.text {
    margin-top: 2.25rem;
  }
  #services .text p {
    position: absolute;
    width: 18.25rem;
    height: 2rem;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8rem;
    text-align: center;

    color: #2f7b77;
  }

  #services .photo {
    position: absolute;
    width: 43.75rem;
    height: 18.75rem;
    left: 8.75rem;
    top: 26.5rem;
  }
  #services div.box {
    text-align: center;
    display: inline-block;
    margin-left: 3.125rem;
    margin-top: 6.25rem;
  }
  #services span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    color: #000000;
  }
  #footer {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 30rem;
    left: 0rem;
    top: 5.8rem;
    display: flex;
    background-color: #0a142f;
  }
  position: absolute;
  left: 0rem;
  right: 0rem;
  #footer img {
    margin-top: 7.3rem;
  }
  #footer div.contact {
    margin-top: 1.5rem;
  }
  #footer p {
    font-family: TT Commons;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */

    /* White */

    color: #ffffff;
  }
`
