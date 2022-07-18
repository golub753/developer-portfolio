import styled from "styled-components";

export const MainText = styled.div`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    text-align: center;
    letter-spacing: -1px;
    color: ${props => props.theme === 'white' ? '#42446E' : '#CCCCCC'};
    margin-bottom: 9px;
    transition: .3s;
    @media (max-width: 768px) {
        font-size: 35px;
        line-height: 35px;
    }
    @media (max-width: 425px) {
        font-size: 30px;
        line-height: 29px;
    }
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
    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 40px;
    }
    @media (max-width: 425px) {
        font-size: 22px;
    }
`