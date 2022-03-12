import React from 'react'
import * as S from './styles'

function Button(props) {
    return (
        <S.Container>
            <select className="select">
                <option value="Default"> Escolha categoria </option>
                <option value="Valor 1"> Encanador </option>
                <option value="Valor 2"> Diariarista </option>
                <option value="Valor 3"> Pedreiro </option>
                <option value="Valor 3"> Técnico </option>
            </select>
        </S.Container>
    )
}

export default Button