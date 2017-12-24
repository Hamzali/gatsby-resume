import React from 'react'
import styled from 'styled-components'

import Logo from '../images/logo.svg'

const StyledHeader = styled.header`
    display: flex;
    background: white;
    border-bottom: solid black 10px;
    justify-content: space-between;
    padding: 0;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.25);
    z-index: 1;
`

const LogoImg = styled.img`
    /* height: 70px; */
    /* width: 50px; */
    margin: .5em;
    /* margin-left: 0; */
    /* margin-bottom: 0; */
    /* margin-top: 0; */
`

const HeaderName = styled.h3`
    align-self: flex-end;
    color: black;
    margin: 1em;
    margin-bottom: 0;
`

export const Header = (props) => (
    <StyledHeader>
        <LogoImg src={Logo}/>
        {props.children}
        <HeaderName>:hamzali/developer</HeaderName>
    </StyledHeader>
)

export default Header