import { Wrapper, Logo } from "../FooterComponents/FooterComponents";
import FooterContacts from "../FooterContacts/FooterContacts";

const FooterTop = () => {
    return ( 
        <Wrapper style={{marginBottom: 42}}>
            <Logo src="../images/images/logo.png" alt="logo"/>
            <FooterContacts/>
        </Wrapper>
     );
}
 
export default FooterTop;