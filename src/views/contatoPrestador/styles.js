import styled from "styled-components";

export const Container = styled.div`
  height: 10rem;
  margin-top: 120px;

  h1 {
    height: 30px;
    text-align: center;
  }
`;

export const body = styled.div`
  background-color: WHITE;
  display: flex;
  height: 35rem;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10rem;
`;

export const LeftSide = styled.div`
  margin-top: 10px;
  margin-left: 70px;
  margin-right: 70px;
  width: 60%;
  background-color: #ebebeb;
`;

export const description = styled.div`
  height: 50%;
  width: 80%;
  margin-left: 10%;
  margin-top: 7%;
  font-family: Montserrat;

  h3 {
    margin-bottom: 40px;
    text-color: #23a6f0;
  }

  info {
    width: 50%;
    margin-left: 50px;
  }
`;

export const RightSide = styled.div`
  margin-top: 10px;
  margin-right: 70px;
  width: 40%;
  background-color: white;
  button {
    background-color: #ffffff;
    margin-top: 20px;
    height: 155px;
    width: 100%;
    border-radius: 0px;
    border-style: solid;
    border-width: thin;
    border-color: #23a6f0;
    cursor: pointer;

    &:hover {
      background-color: #5d8aa8;
      transition: 0.5s;
    }

    img {
      display: flex;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      justify-content: center;
    }
  }
`;
export const UserInfo = styled.div`
  border-style: solid;
  border-width: thin;
  border-color: #dedede;
  height: 370px;

  img {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    width: 300px;
  }

  infoImage {
    name {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }

    ocupation {
      display: flex;
      justify-content: center;
    }
  }
`;

export const hireButton = styled.div`
  margin-top: 20px;
  border-style: solid;
  border-width: thin;
  border-color: #23a6f0;
  height: 155px;

  img {
    display: flex;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    display: flex;
    justify-content: center;
  }
`;
