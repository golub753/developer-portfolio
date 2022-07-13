import Container from '../containers/Container/Container';
import Main from '../components/Main/Main';
import Techs from '../components/Techs/Techs';
import Portfolio from '../components/Portfolio/Portfolio';

const Home = () => {
    return ( 
        <Container>
            <Main/>
            <Techs/>
            <Portfolio/>
        </Container>
     );
}
 
export default Home;