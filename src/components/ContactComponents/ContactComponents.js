import styled from "styled-components";

export const MainText = styled.div`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    text-align: center;
    letter-spacing: -1px;
    color: ${props => props.theme === 'white' ? '#1E0E62' : '#CCCCCC'};
    margin-bottom: 9px;
    transition: .3s;
`

export const Mail = styled.a`
    display: block;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    text-align: center;
    letter-spacing: -1px;
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-decoration: none;
`