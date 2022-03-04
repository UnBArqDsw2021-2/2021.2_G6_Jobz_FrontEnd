import React from 'react';
import * as S from './styles';
import { FaBell } from 'react-icons/fa';
import LogoBlack from '../../assets/logo-black.png';

const isLogged = false;

function Navbar(props) {
    return (
        <S.Container>
            <S.LogoContainer>
                <img src={LogoBlack} alt="logo-black" />
            </S.LogoContainer>
            <S.ButtonsContainer>
                <a href="/">Home</a>
                <a href="/">Torne-se um prestador de serviços</a>
                <a href="/">{ isLogged ? <FaBell /> : 'Login'}</a>
            </S.ButtonsContainer>
        </S.Container>
    )
}

export default Navbar;