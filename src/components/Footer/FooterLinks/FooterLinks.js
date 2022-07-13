import { Ul } from "../FooterComponents/FooterComponents";
import { useSelector } from "react-redux";
import FooterLink from "../FooterLink/FooterLink";

const FooterLinks = () => {
    const links = useSelector(state => state.links.links);
    return ( 
        <Ul>
            {links.map((item, key) => {
                return(
                    <FooterLink
                        text={item.text}
                        link={item.link}
                        key={key}
                    />
                )
            })}
        </Ul>
     );
}
 
export default FooterLinks;