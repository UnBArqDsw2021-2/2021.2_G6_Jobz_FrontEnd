import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function Button(props) {

    let navigate = useNavigate()
    const isLogged = false

    function navigateTo() {
        navigate(props.onClick)
    }

    return (
        <S.Container ButtonColor={props.ButtonColor} borderColor={props.borderColor} fontColor={props.fontColor} borderRadius={props.borderRadius} >
            <button onClick={navigateTo} className="button">
                <span> {props.title}</span>
            </button>
        </S.Container>
    )
}

export default Button