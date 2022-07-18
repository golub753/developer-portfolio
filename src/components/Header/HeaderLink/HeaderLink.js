import { useSelector } from "react-redux";
import { Li, Link } from "../HeaderComponents/HeaderComponents";

const HeaderLink = ({text, link, closeMenu}) => {
    const theme = useSelector(state => state.theme.theme)
    return ( 
        <Li>
            <Link to={link} theme={theme} onClick={() => closeMenu()}>{text}</Link>
        </Li>
     );
}
 
export default HeaderLink;