import { Section, Title, Subtitle } from "./PortfolioComponents/PortfolioComponents";
import { useSelector } from 'react-redux';
import PortfolioBlocks from "./PortfolioBlocks/PortfolioBlocks";

const Portfolio = () => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Section>
            <Title theme={theme}>Projects</Title>
            <Subtitle theme={theme}>Things I’ve built so far</Subtitle>
            <PortfolioBlocks/>
        </Section>
     );
}
 
export default Portfolio;