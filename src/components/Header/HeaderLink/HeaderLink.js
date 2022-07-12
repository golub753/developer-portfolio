import { Li, Link } from "../HeaderComponents/HeaderComponents";

const HeaderLink = ({text, link}) => {
    return ( 
        <Li>
            <Link to={link}>{text}</Link>
        </Li>
     );
}
 
export default HeaderLink;