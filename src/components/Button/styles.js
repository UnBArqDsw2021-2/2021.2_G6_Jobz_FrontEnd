import styled from 'styled-components'

export const Container = styled.div`
  .button {
    background-color: white;
    width: 235.77px;
    height: 34.77px;
    border: 1px solid #c7b4b9;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    caret-color: transparent;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    span {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      /* or 125% */

      text-align: center;
      text-transform: uppercase;

      color: #ae163a;
    }
  }
`
