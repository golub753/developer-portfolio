import { useSelector } from "react-redux";
import { Line } from "../FooterComponents/FooterComponents";

const FooterLine = () => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Line theme={theme}/>
     );
}
 
export default FooterLine;