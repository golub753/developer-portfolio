import { Section } from "./FooterComponents/FooterComponents";
import Container from "../../containers/Container/Container";
import FooterTop from "./FooterTop/FooterTop";
import FooterLine from "./FooterLine/FooterLine";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
    return ( 
        <Section>
            <Container>
                <FooterTop/>  
                <FooterLine/>
                <FooterBottom/>
            </Container>
        </Section>
     );
}
 
export default Footer;