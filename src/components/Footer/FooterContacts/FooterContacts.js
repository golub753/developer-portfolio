import { useSelector } from "react-redux";
import { Contacts ,Path } from "../FooterComponents/FooterComponents";
import FooterNetworks from "../FooterNetworks/FooterNetworks";

const FooterContacts = () => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Contacts>
            <Path theme={theme} href="tel:+375298429669">+375(29)842-96-69</Path>
            <Path theme={theme} href="mailto:golubanton753@gmail.com">golubanton753@gmail.com</Path>
            <FooterNetworks/>
        </Contacts>
     );
}
 
export default FooterContacts;