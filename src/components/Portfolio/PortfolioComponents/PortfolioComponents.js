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
    font-weight: 700;
    font-size: 48px;
    color: ${props => props.theme === 'white' ? '#42446E' : '#CCCCCC'};
    margin-bottom: 49px;
    transition: .3s;
    @media (max-width: 768px) {
        font-size: 35px;
        margin-bottom: 30px;
    }
`

export const Subtitle = styled.div`
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
    color: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'};
    margin-bottom: 80px;
    transition: .3s;
    @media (max-width: 768px) {
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 35px;
    }
`

export const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 48px;
    grid-auto-rows: max-content;
    grid-row-gap: 65px;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`

export const Block = styled.div`
    transition: .3s;
    width: 100%;
    height: 100%;
    background: ${props => props.theme === 'white' ? '#FFFFFF' : '#363636'};
    box-shadow: 2px 2px 10px ${props => props.theme === 'white' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
    border-radius: 20px;
    :hover {
        box-shadow: 2px 2px 50px ${props => props.theme === 'white' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
    }
`

export const Img = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
`

export const Info = styled.div`
    padding: 27px 45px 25px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 316px);
`

export const InfoWithText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Name = styled.div`
    font-weight: 500;
    font-size: 28px;
    line-height: 26px;
    color: ${props => props.theme === 'white' ? '#000000' : '#CCCCCC'};
    margin-bottom: 17px;
    text-transform: uppercase;
    transition: .3s;
    @media (max-width: 768px) {
        font-size: 25px;
        margin-bottom: 10px;
    }
`

export const Description = styled.div`
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    color: ${props => props.theme === 'white' ? '#666666' : '#CCCCCC'};
    margin-bottom: 12px;
    transition: .3s;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const StackLine = styled.div`
    margin-bottom: 21px;
`

export const Stack = styled.div`
    display: inline-block;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${props => props.theme === 'white' ? '#42446E' : '#CCCCCC'};
    transition: .3s;
    margin-right: 5px;
`

export const Line = styled.span`
    display: inline-block;
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    color: ${props => props.theme === 'white' ? '#42446E' : '#CCCCCC'};
    transition: .3s;
    margin-right: 5px;
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-row-gap: 10px;
`

export const Chain = styled.a`
    display: flex;
    align-items: center;
    grid-column-gap: 10px;
    text-decoration: none;
`

export const ChainText = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${props => props.theme === 'white' ? '#000000' : '#FFFFFF'};
    transition: .3s;
    text-decoration: underline;
`

export const Icon = styled.img`
    width: 20px;
    filter: invert(${props => props.theme === 'white' ? 0 : 1});
    transition: .3s;
`