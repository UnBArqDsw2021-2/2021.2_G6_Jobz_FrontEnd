import styled from 'styled-components'

export const Container = styled.div`
  .button {
    background-color: white;
    width: 18.75rem;
    height: 2.5rem;
    border-radius: 0.625rem;
    border-color: #ae163a;

    align-items: center;
    cursor: pointer;

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
