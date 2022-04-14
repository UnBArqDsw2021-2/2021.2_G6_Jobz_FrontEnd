import styled from "styled-components";

export const Container = styled.div``;

export const RegistrationButton = styled.a`
  font-family: Montserrat;
  margin-top: 20px;
  font-size: 15px;
`;
export const Body = styled.div`
  height: 400px;
  flex-direction: column;
  display: flex;
  background-color: #fff;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;

  #GroupForm {
    height: 370px;
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 370px;
    background-color: #f9f9f9;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15), -4px -4px 4px #ffffff;
    border-radius: 10px;
    p {
      font-family: Montserrat;
      font-size: 16px;
    }
  }

  header {
    margin-top: 23px;
    margin-bottom: 40px;
    caret-color: transparent;

    img {
      background-color: #f9f9f9;
      height: 61px;
      widht: 114px;
      justify-content: center;
    }
  }

  form {
    padding: 0 1rem;
    background-color: #f9f9f9;
    justifycontent: "space-between";
    margin-top: -43px;

    .email {
      display: flex;

      #iconEmail {
        margin-top: 10px;
        margin-left: 10px;
        position: absolute;
      }
    }

    .password {
      display: flex;

      #iconPassword {
        margin-top: 10px;
        margin-left: 10px;
        position: absolute;
      }
    }
  }

  a {
    margin-left: 65px;
    padding-left: 34px;
    color: #e38233;
  }
`;
