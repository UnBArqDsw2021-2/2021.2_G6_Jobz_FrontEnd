import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;

  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  header {
    margin-top: 4.1rem;
    background-color: white;
    font-size: 6.25rem;
    img {
      background-color: white;
      height: 5.625rem;
    }
  }

  form {
    padding: 0 1rem;
    background-color: white;
    justifycontent: 'space-between';
    margin-top: 0.3125rem;

    button {
      widht: 100px;
    }

    input {
      width: 18.253rem;
      height: 2.128rem;
      margin-bottom: 1.31rem;
      text-indent: 2.625rem;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.25rem;

      color: #ae163a;
    }
  }
`
