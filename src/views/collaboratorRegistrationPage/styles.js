import styled from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  height: 650px;
  margin-bottom: 120px;
  flex-direction: column;
  display: flex;
  background-color: #fff;
  align-items: center;
  margin-top: 178px;
  #GroupForm {
    height: 990px;
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 640px;
    background-color: #f9f9f9;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15), -4px -4px 4px #ffffff;
    border-radius: 10px;
  }
  header {
    margin-top: 12px;
    img {
      background-color: #f9f9f9;
      height: 61px;
      widht: 114px;
      margin-left:90px;
    }
    p{
      font-family: Montserrat;
      font-size:16px;
    }
  }

  form {
    padding: 0 1rem;
    background-color: #f9f9f9;
    justifycontent: 'space-between';
    margin-top: 0.3125rem;

    select {
      background-color: white;
      border: 1px solid #c7b4b9;
      box-sizing: border-box;
      border-radius: 4px;
      background-image: url();
      background-repeat: no-repeat;

      width: 235.77px;
      height: 34.77px;
      margin-bottom: 1.31rem;
      text-indent: 2.625rem;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #ae163a;
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
  #Linkation {
    margin-left: -30px;
    margin-top: 12px;
    display: flex;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    a {
      padding-left: 34px;
      color: #e38233;
    }
  }
`
