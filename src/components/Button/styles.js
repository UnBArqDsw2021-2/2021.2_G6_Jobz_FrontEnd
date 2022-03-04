import styled from 'styled-components'

export const Container = styled.div`
.button{
    background-color: white;
    width: 300px;
    height:40px;
    border-radius: 10px;
    border-color: #AE163A;
    
    align-items: center;
    cursor: pointer;

    &:not(:disabled):hover{
        filter: brightness(0.9);
    }

    span{
        color: #AE163A;
        font-size: 20px;
        }
}
`