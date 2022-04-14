import React from 'react'
import * as S from './styles'

function Input(props) {
    return (
        <S.Container>
            <input {...props} />
        </S.Container>
    )
}

export default Input