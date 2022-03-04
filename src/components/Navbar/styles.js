import styled from 'styled-components';

export const Container = styled.div`
  width: 100% + 9px;
  height: 80px;
  margin: -10px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid red; /* -=-=-=- TODO: delete this line -=-=-=-=- */
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-left: 5%;
`;

export const ButtonsContainer = styled.div`
  margin-right: 50px;
  a {
    color: rgb(98, 144, 142);
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
`;