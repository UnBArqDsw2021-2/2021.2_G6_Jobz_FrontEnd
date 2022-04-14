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
  position:absolute;
  width: 81px;
  height: 37.99px;
  margin-top: 20px;
  display: flex;
  margin-left: 77px;
`

export const Contact = styled.div`
  position:absolute;
  margin-left: 51px;
  width: 161.37px;
  height: 46.82px;
  padding-top: 57px;

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
  left: 50%;
  width: 200px;
  margin-top: -1px;
  opacity: 0.9;
  color: white;
  a {
    color: white;
  }
`

export const Divider = styled.div`
  position: absolute;
  left: 51px;
  right: 51px;
  margin-top: 150px;
  background: #ffffff;
  opacity: 0.2;
  border: 1px solid #ffffff;
`
export const Social = styled.div`
  display: flex;
  margin-left:51px;
  margin-top:170px;
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
  p.pProduct {
    left: 50%;
    display: inline-block;
    position:absolute;
    width: 133px;
    height: 19px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 16px;
    color: #fff;
  }
  #logosmall {
    position:absolute;
    margin-left:54%;
    margin-top:16px;
    width: 43px;
    height: 19px;
  }
  p.pRserved {
    right:51px;
    display: inline-block;
    position:absolute;
    width: 250px;
    height: 15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 16px;
    color: #fff;
  }
  
`
