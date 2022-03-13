import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 7%;

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
`;

export const RegistrationButton = styled.a`
  font-family: Montserrat;
  margin-top: 24px;
  text-decoration: none;
  color: rgb(82, 19, 31);
  font-size: 15px;
`;
