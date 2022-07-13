import { Wrapper } from "../FooterComponents/FooterComponents";
import { Nav } from "../FooterComponents/FooterComponents";
import FooterLinks from '../FooterLinks/FooterLinks';

const FooterBottom = () => {
    return ( 
        <Wrapper>
            <Nav>
                <FooterLinks/>
            </Nav>
        </Wrapper>
     );
}
 
export default FooterBottom;