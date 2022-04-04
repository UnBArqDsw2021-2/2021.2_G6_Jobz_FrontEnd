import styled from 'styled-components'

export const Container = styled.div`
  .button {
    background-color: ${props => (props.ButtonColor ? props.ButtonColor : 'white')};
    width: ${props => (props.buttonWidth ? props.buttonWidth : '235px')};
    height: ${props => (props.buttonHeight ? props.buttonHeight : '34px')};
    border: ${props => (props.borderColor ? props.borderColor : '1px solid #c7b4b9')};
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: ${props => props.borderRadius ? props.borderRadius : '76px'};
    align-items: center;
    cursor: pointer;
    caret-color: transparent;
    z &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    span {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-align: center;

      color: ${props => (props.textColor ? props.textColor : '#ae163a')};
    }
  }
`
