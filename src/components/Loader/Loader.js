import styled from "styled-components";
import {useSelector} from 'react-redux';


const Block = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme === 'white' ? '#FFFFFF' : '#191919'};
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrap = styled.div`
    width: 200px;
    height: 200px;
    border: 5px dashed ${props => props.theme === 'white' ? '#42446E' : '#D9D9D9'};
    border-radius: 50%;
    animation: 5s linear rot;
    @keyframes rot {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes rot {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const Loader = () => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Block theme={theme}>
            <Wrap theme={theme}/>
        </Block>
     );
}
 
export default Loader;