import styled from "styled-components";

export const Section = styled.div`
    padding: 100px 0;
    @media (max-width: 1024px) {
        padding: 50px 0;
    }
    @media (max-width: 768px) {
        padding: 25px 0;
    }
`

export const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 49px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#42446E' : '#CCCCCC'};
    @media (max-width: 768px) {
        font-size: 35px;
        margin-bottom: 30px;
    }
`

export const Subtitle = styled.div`
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'};
    margin-bottom: 80px;
    @media (max-width: 768px) {
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 35px;
    }
`

export const Technologies = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    grid-row-gap: 80px; 
    @media (max-width: 1024px) {
        grid-template-columns: repeat(5,1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(4,1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(3,1fr);
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.img``