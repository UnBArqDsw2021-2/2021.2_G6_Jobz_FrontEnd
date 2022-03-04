import React from 'react';
import * as S from './styles';
import { FaBell } from 'react-icons/fa';

function Navbar(props) {
    return (
        <S.Container>
            <S.LogoContainer>
                oi
            </S.LogoContainer>
            <S.ButtonsContainer>
                <a href="/">Home</a>
                <a href="/">Explore</a>
                <a href="/"><FaBell /></a>
            </S.ButtonsContainer>
        </S.Container>
    )
}

export default Navbar 