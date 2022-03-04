import React from 'react'
import * as S from './styles'

function Button(props) {
    return (
        <S.Container>
            <button className="button">
                <span> {props.title} </span>
            </button>
        </S.Container>
    )
}

export default Button