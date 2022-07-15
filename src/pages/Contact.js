import {Section} from '../containers/Container/Section';
import Container from '../containers/Container/Container';
import { MainText, Mail } from '../components/ContactComponents/ContactComponents';
import { useSelector } from 'react-redux/es/exports';

const Contact = () => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Container>
                <MainText theme={theme}>For any questions please mail me:</MainText>
                <Mail href='mailto:golubanton753@gmail.com'>golubanton753@gmail.com</Mail>
            </Container>
        </Section>
     );
}
 
export default Contact;