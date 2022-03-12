import React from 'react'
import * as S from './styles'
import procura from '../../assets/procura.svg'



function Input(props) {
    return (
        <S.Container>
            <input {...props} />
        </S.Container>
    )
}

export default Input