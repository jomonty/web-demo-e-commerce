import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleHeader = styled.h1`
    color: #31661B;
    text-align: center;
    padding-top: 3rem;
`

const NavBar = styled.ul`
    display: flex;
    justify-content: right;
    list-style-type: none;
    column-gap: 2rem;
    padding: 1.5rem 3rem 1.5rem 0;
`

const NavBarLink = styled(Link)`
    text-decoration: none;
    color: #31661B;
    font-weight: 500;
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    text-align: center;

    &:hover {
        text-decoration: underline;
        color: #639F2A;
    }
`

const Header = ({ basketLength }) => {
    return (
        <>
            <TitleHeader>Demo E-Commerce Store</TitleHeader>
            <NavBar>
                <li>
                    <NavBarLink to="/" >Home</NavBarLink>
                </li>
                <li>
                    <NavBarLink to="/basket" >Basket ({basketLength})</NavBarLink>
                </li>
            </NavBar>
        </>
    )
};

export default Header