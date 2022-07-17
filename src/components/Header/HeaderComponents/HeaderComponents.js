import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.div`
    padding: 40px 0;
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

export const Nav = styled.nav``

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