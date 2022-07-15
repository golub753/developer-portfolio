import Container from '../../containers/Container/Container';
import { Main, Logo, Wrapper, Nav, Lists } from './HeaderComponents/HeaderComponents';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderNetworks from './HeaderNetworks/HeaderNetworks';

const Header = () => {
    return ( 
        <Main>
            <Container>
                <Wrapper>
                    <Logo src='https://golub753.github.io/developer-portfolio/images/images/logo.png'/>
                    <Nav>
                        <Lists>
                            <HeaderLinks/>
                            <HeaderNetworks/>
                        </Lists>
                    </Nav>
                </Wrapper>
            </Container>
        </Main>
     );
}
 
export default Header;