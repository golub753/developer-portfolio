import styled from "styled-components";

export const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 38px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#42446E' : '#CCCCCC'};
`

export const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#666666' : '#A7A7A7'};
    margin-bottom: 38px;
    max-width: 708px;
`

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 704px;
    padding: 0;
    margin-bottom: 38px;
    list-style-type: none;
`

export const Li = styled.li`
    border-bottom: 2px solid #EBEAED;
    padding-bottom: 25px;
    margin-bottom: 35px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
`

export const BottomInfo = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 23px;
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
`

export const Icon = styled.img``

export const Dates = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
`

export const DateText = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 1px;
    transition: .3s;
    color: ${props => props.theme === 'white' ? '#42446E' : '#A7A7A7'};
`