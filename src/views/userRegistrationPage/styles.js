import styled from "styled-components";

export const Container = styled.div``;

export const Body = styled.div`
  margin-bottom: 120px;
  height: 600px;
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
    width: 643px;
    height: 643px;
    background-color: #f9f9f9;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15), -4px -4px 4px #ffffff;
    border-radius: 10px;
  }

  header {
    margin-top: 14px;
    caret-color: transparent;
    p {
      font-family: Montserrat;
      font-size: 16px;
      margin-top: -1px;
    }

    img {
      background-color: #f9f9f9;
      height: 61px;
      widht: 114px;
      justify-content: center;
      margin-left: 2.2rem;
    }
  }

  form {
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    .name {
      display: flex;
      #iconeNome {
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
      }

      #errorName {
        margin-top: 40px;
        font-size: 12px;
        color: red;
        position: absolute;
      }
    }

    .email {
      margin-top: 14px;
      display: flex;
      #iconeEmail {
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
      }
      #errorEmail {
        margin-top: 40px;
        font-size: 12px;
        color: red;
        position: absolute;
      }
    }

    .cpf {
      display: flex;
      margin-top: 14px;
      #iconeCpf {
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
      }
      #errorCpf {
        margin-top: 40px;
        font-size: 12px;
        color: red;
        position: absolute;
      }
    }

    .phone {
      margin-top: 14px;
      display: flex;
      #iconePhone {
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
      }
      #errorPhone {
        margin-top: 40px;
        font-size: 12px;
        color: red;
        position: absolute;
      }
    }

    .password {
      margin-top: 14px;
      display: flex;
      #iconePassword {
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
      }
      #errorPassword {
        margin-top: 40px;
        font-size: 12px;
        color: red;
        position: absolute;
      }
    }

    .confirmPassword {
      margin-top: 14px;
      display: flex;
      #iconePassword {
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
      }
      #errorConfirmPassword {
        margin-top: 40px;
        font-size: 12px;
        color: red;
        position: absolute;
      }

      #correctPassword {
        margin-top: 40px;
        font-size: 12px;
        color: green;
        position: absolute;
      }
    }

    input[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
    padding: 0 1rem;
    background-color: #f9f9f9;
    justifycontent: "space-between";
    margin-top: 0.3125rem;
  }

  #Linkation {
    margin-left: -30px;
    margin-top: 12px;
    display: flex;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-align: center;

    a {
      padding-left: 34px;
      color: #e38233;
    }
  }
`;
