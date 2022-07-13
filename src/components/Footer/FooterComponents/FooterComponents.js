import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.div`
    padding: 60px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    width: 150px;
`

export const Contacts = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 60px;
`

export const Path = styled.a`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: ${props => props.theme === 'white' ? '#42446E' : '#A7A7A7'};
    transition: .3s;
    text-decoration: none;
`

export const Networks = styled.div`
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
`

export const Line = styled.div`
    height: 2px;
    background: ${props => props.theme === 'white' ? 'rgba(102, 102, 102, 0.3)' : 'rgba(66, 68, 110, 0.3);'};
    transition: .3s;
    margin-bottom: 53px;
`

export const Nav = styled.nav``

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    grid-column-gap: 60px;
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
`