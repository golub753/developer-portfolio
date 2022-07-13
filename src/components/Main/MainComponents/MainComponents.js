import styled from "styled-components";

export const Block = styled.div`
    padding: 100px 0;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 636px 350px;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#42446E' : '#D9D9D9'};
`

export const GradientText = styled.span`
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

export const ImageWrapper = styled.div`
    display: block;
    width: 100%;
    height: 350px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    ::after {
        position: absolute;
        left: -9px;
        top: -9px;
        content: '';
        width: 105%;
        height: 105%;
        background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
        border-radius: 50%;
        z-index: -1;
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`