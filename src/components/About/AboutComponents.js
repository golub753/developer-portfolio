import styled from "styled-components";

export const Block = styled.div`
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
    margin-bottom: 38px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#42446E' : '#CCCCCC'};
    @media (max-width: 768px) {
        font-size: 35px;
        margin-bottom: 30px;
    }
`

export const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'};
    margin-bottom: 38px;
    max-width: 708px;
    @media (max-width: 768px) {
        font-size: 17px;
        line-height: 28px;
        margin-bottom: 20px;
        max-width: 100%;
    }
`

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 704px;
    padding: 0;
    margin-bottom: 38px;
    list-style-type: none;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 560px) {
        margin-bottom: 10px;
    }
`

export const Li = styled.li`
    border-bottom: 2px solid #EBEAED;
    padding-bottom: 25px;
    margin-bottom: 35px;
    @media (max-width: 560px) {
        margin-bottom: 20px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        align-items: flex-end;
    }
    @media (max-width: 425px) {
        flex-direction: column;
        align-items: flex-start;
        grid-row-gap: 15px;
    }
`

export const NameInfo = styled.div`
    display: flex;
    flex-direction: column;
    grid-row-gap: 4px;
`

export const PartInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    grid-row-gap: 12px;
    @media (max-width: 425px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        flex-wrap: wrap;
    }
`

export const Employment = styled.div`
    background: #D7FFE0;
    border-radius: 100px;
    width: 84px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 9px;
    line-height: 26px;
    color: #018C0F;
`

export const Name = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'};
    @media (max-width: 560px) {
        font-size: 18px;
    }
`

export const BottomInfo = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 23px;
    @media (max-width: 768px) {
        align-items: baseline;
    }
`

export const SubscInfo = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
`

export const Subsc = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 1px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#42446E' : '#A7A7A7'};
    @media (max-width: 768px) {
        line-height: 17px;
    }
`

export const Icon = styled.img`
`

export const Dates = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
    @media (max-width: 768px) {
        align-items: baseline;
    }
`

export const DateText = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 1px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#42446E' : '#A7A7A7'};
    @media (max-width: 768px) {
        line-height: 17px;
    }
`