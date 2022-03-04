import styled from 'styled-components';

export const Container = styled.div`
  width: 100% + 9px;
  height: 100px;
  border: 1px solid red;
  margin: -10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  border: 1px solid blue;
`;

export const ButtonsContainer = styled.div`
  border: 1px solid blue;

  a {
    color: rgb(98, 144, 142);
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;
  }
`;