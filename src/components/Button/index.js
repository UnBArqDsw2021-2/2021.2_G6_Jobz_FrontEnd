import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function Button(props) {
    let navigate = useNavigate();

    function navigateToPage() {
        navigate(props.path)
    }

    return (
        <S.Container ButtonColor={props.ButtonColor} textColor={props.textColor} borderColor={props.borderColor} borderRadius={props.borderRadius}>
            {props => props.path ? props.path : 'userRegistrationPage'}
            <button onClick={navigateToPage} className="button"   >
                <span> {props.title}</span>
            </button>
        </S.Container>
    )
}

export default Button