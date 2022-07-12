import { useSelector } from "react-redux";
import { Li, Link } from "../HeaderComponents/HeaderComponents";

const HeaderLink = ({text, link}) => {
    const theme = useSelector(state => state.theme.theme)
    return ( 
        <Li>
            <Link to={link} theme={theme}>{text}</Link>
        </Li>
     );
}
 
export default HeaderLink;