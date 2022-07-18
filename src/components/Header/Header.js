import Container from '../../containers/Container/Container';
import { Main, Logo, Wrapper, Nav, Lists } from './HeaderComponents/HeaderComponents';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderNetworks from './HeaderNetworks/HeaderNetworks';
import HeaderBurger from './HeaderBurger/HeaderBurger';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const theme = useSelector(state => state.theme.theme);

    const openMenu = () => {
        (menu) ? setMenu(false) : setMenu(true);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    return ( 
        <Main>
            <Container>
                <Wrapper>
                    <Logo src='https://golub753.github.io/developer-portfolio/images/images/logo.png'/>
                    <Nav theme={theme} menu={menu}>
                        <Lists>
                            <HeaderLinks closeMenu={closeMenu}/>
                            <HeaderNetworks/>
                        </Lists>
                    </Nav>
                    <HeaderBurger openMenu={openMenu}/>
                </Wrapper>
            </Container>
        </Main>
     );
}
 
export default Header;