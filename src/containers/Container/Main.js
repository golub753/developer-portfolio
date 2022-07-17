import styled from "styled-components";

export const Main = styled.div`
    padding: 0;
    transition: .3s;
    background: ${props => (props.theme === 'white') ? '#FFFFFF' : '#191919'};
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`

export const Toggle = styled.div`
    cursor: pointer;
    background: ${props => (props.theme === 'white') ? '#191919' : '#FFFFFF'};
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    z-index: 1;
`

export const Sun = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    opacity: ${props => (props.theme === 'white') ? '0' : '1'};
    transition: .3s;
`

export const Moon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    opacity: ${props => (props.theme === 'white') ? '1' : '0'};
    transition: .3s;
`