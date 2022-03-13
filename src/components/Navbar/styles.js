import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #05323a 9.64%, #1e696c 89.85%);

  //border: 1px solid red; /* -=-=-=- TODO: delete this line -=-=-=-=- */
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-left: 5%;

  button {
    border-radius: 50%;
    background-color: transparent;
    border-color: transparent;
    height: 37px;
    width: 50px;
    cursor: pointer;
    justify-content: center;
  }
`;

export const ButtonsContainer = styled.div`
  margin-right: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 110px;

  a {
    padding-left: 32px;
    color: #fff;
    text-decoration: none;
    letter-spacing: 0.2px;
    margin-right: 20px;
    font-weight: bold;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
  button {
    border-color: transparent;
    background-color: transparent;
  }
`;
export const BuscaHeader = styled.div`
  margin-left: 2.56rem;
  background-color: #f5f5f5;
  height: 50px;
  border: 1px solid #dadada;
  border-radius: 74px;
  width: 317px;

  #btnBusca {
    margin-left: 16px;
    padding-top: 1.0625rem;
  }

  #txtBusca {
    box-shadow: 0 0 0 0;
    outline: 0;
    position: relative;
    border-radius: 74px;
    float: right;
    background-color: transparent;
    padding-left: 5px;
    font-family: Montserrat;
    font-size: 14px;
    border: none;
    height: 100%;
    width: 256px;
    text-indent: 24px;
  }
`;
