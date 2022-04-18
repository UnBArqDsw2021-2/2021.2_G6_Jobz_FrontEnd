import styled from 'styled-components'

export const Container = styled.div`
  height: 50px;
  margin-bottom: 50px;
`

export const body = styled.div`
  display: flex;
  margin-top: 8%;
  margin-bottom: 10rem;
  width: 100%;
`
export const navigationBar = styled.div`
  margin-top: 70px;
  width: 30rem;
  margin-left: 5%;
`
export const rightSide = styled.div`
  margin-top: 40px;

  width: 30rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  color: #black;

  h1 {
    caret-color: transparent;

    align-items: left;
    text-align: left;
  }

  .comando {
    caret-color: transparent;
    margin-top: 5%;
    width: 30rem;
    align-items: left;
    text-align: left;
  }

  email {
    display: flex;
    p {
      margin-top: 40px;
    }
    input {
      margin-left: 8rem;
      margin-top: 30px;
    }
  }

  password {
    margin-top: 20px;
    display: flex;
    p {
      margin-top: 25px;
    }
    input {
      margin-left: 8rem;
      margin-top: 14px;
    }
  }

  confirmpassword {
    display: flex;
    margin-top: 20px;

    p {
      margin-top: 15px;
    }
    input {
      margin-left: 3rem;
      margin-top: 14px;
    }
  }
`
