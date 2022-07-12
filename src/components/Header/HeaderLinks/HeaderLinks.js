import { useSelector } from "react-redux";
import { Ul } from "../HeaderComponents/HeaderComponents";
import HeaderLink from "../HeaderLink/HeaderLink";

const HeaderLinks = () => {
    const links = useSelector(state => state.links.links);
    return ( 
        <Ul>
            {links.map((item, key) => {
                return(
                    <HeaderLink
                        text={item.text}
                        link={item.link}
                        key={key}
                    />
                )
            })}
        </Ul>
     );
}
 
export default HeaderLinks;