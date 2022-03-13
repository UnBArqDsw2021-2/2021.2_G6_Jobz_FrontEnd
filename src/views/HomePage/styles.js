import styled from 'styled-components'

export const Container = styled.div`
  #divBuscaSearch {
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
  #btnBuscaSearch {
    margin-left: 16px;
    padding-top: 1.0625rem;
  }

  #txtBuscaSearch {
    box-shadow: 0 0 0 0;
    outline: 0;
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
    justify-content: center;
    background-color: #fff;
    margin-top: 33.2rem;
    height: 33rem;
  }
  #services div.text {
    margin-top: 2.25rem;
  }
  #services .text p {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 50rem;
    height: 2rem;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8rem;
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

  #jobzInfo {
    line-height: 7rem;
    height: 17rem;
    width: 100%;
    display: column;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    color: white;
    caret-color: transparent;
    background: linear-gradient(90deg, #05323a 9.64%, #1e696c 89.85%);

    .button{

    }
  }

#titleCategories{
  margin-bottom: 1rem;   
  justify-content: center;
  margin-top: 5rem;
  display: column;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  color: #2f7b77;;
}

  #popularCategories{
    caret-color: transparent;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    display: flex;
    justify-content: center;
    p{
      text-align: center;
      line-height: 60px;
      height: 60px;
      background: linear-gradient(90deg, #05323a 9.64%, #1e696c 89.85%);
      width: 25rem;
      margin-left: 1rem;
    }
  }


`
