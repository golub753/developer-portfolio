import { Wrapper, Logo } from "../FooterComponents/FooterComponents";
import FooterContacts from "../FooterContacts/FooterContacts";

const FooterTop = () => {
    return ( 
        <Wrapper style={{marginBottom: 42}}>
            <Logo src="https://golub753.github.io/developer-portfolio/images/images/logo.png" alt="logo"/>
            <FooterContacts/>
        </Wrapper>
     );
}
 
export default FooterTop;