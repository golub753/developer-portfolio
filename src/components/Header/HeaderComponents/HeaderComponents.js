import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.div`
    padding: 40px 0;
    @media (max-width: 768px) {
        position: relative;
    }
`

export const Logo = styled.img`
    width: 150px;
    @media (max-width: 1024px) {
        width: 125px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Nav = styled.nav`
    @media (max-width: 768px) {
        position: absolute;
        left: 0;
        right: 0;
        opacity: ${props => props.menu ? '1' : '0'};
        visibility: ${props => props.menu ? 'visible' : 'hidden'};
        top: 100%;
        padding: 15px 15px;
        z-index: 2;
        transition: 0.55s opacity, 0.55s visibility;
        background: ${props => props.theme === 'white' ? '#FFFFFF' : '#191919'}
    }
`

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    grid-column-gap: 60px;
    @media(max-width: 1024px) {
        grid-column-gap: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        grid-row-gap: 20px;
    }
`

export const Li = styled.li``

export const Link = styled(NavLink)`
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color:${props => (props.theme === 'white') ? '#666666' : '#A7A7A7'};
    text-decoration: none;
    @media (max-width: 1024px) {
        font-size: 17px;
    }
`

export const Lists = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 50px;
    @media (max-width: 1024px) {
        grid-column-gap: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        grid-row-gap: 20px;
    }
`

export const Networks = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    grid-column-gap: 20px;
`

export const Network = styled.a`
    text-decoration: none;
`

export const Img = styled.img`
    width: 30px;
    @media (max-width: 1024px) {
        width: 25px;
    }
`

export const Burger = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 21px;
    transition: 0.3s;
    ::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
        border-radius: 10px;
        transition: 0.3s;
        background: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'}
    }
    ::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
        border-radius: 10px;
        transition: 0.3s;
        background: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'}
    }
    @media (max-width: 768px) {
        display: flex;
    }
`

export const BurgerLine = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 10px;
    transition: 0.3s;
    background: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'}
`