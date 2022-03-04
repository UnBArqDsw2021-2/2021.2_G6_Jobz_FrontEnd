import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
Height: 100%;
border-radius: 10px;

flex-direction: column;
display:flex;
justify-content: center;
align-items: center;

header{
    background-color:white;
    font-size: 100px;
    img{
        background-color: white;
        height: 90px;
        
    }
}

form{
    
    padding: 0 16px;
    background-color:white;
    justifyContent: 'space-between';
    margin-top: 5px;

    input{
        margin-top: 5px;
    }
}

`