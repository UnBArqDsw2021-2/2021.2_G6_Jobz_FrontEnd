import React from 'react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

function Button(props) {
  let navigate = useNavigate()

  function navigateToPage() {
    const path = props.path
    if (path == null) {
    } else {
      navigate(props.path)
    }
  }

  return (
    <S.Container {...props}>
      {props => (props.path ? props.path : null)}
      <button onClick={navigateToPage} className="button">
        <span> {props.title}</span>
      </button>
    </S.Container>
  )
}

export default Button
