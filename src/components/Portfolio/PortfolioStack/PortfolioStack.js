import { Line } from "../PortfolioComponents/PortfolioComponents";
import {useSelector} from 'react-redux';

const PortfolioStack = ({stack, array, id}) => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Line theme={theme}>
            {stack}{(id === array.length - 1) ? '' : ','}
        </Line>
     );
}
 
export default PortfolioStack;