import { Block, Description, Img, Info, InfoWithText, Name, StackLine, Stack, Links, Chain, ChainText, Icon } from "../PortfolioComponents/PortfolioComponents";
import { useSelector } from 'react-redux';
import PortfolioStack from "../PortfolioStack/PortfolioStack";

const PortfolioBlock = ({item}) => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Block theme={theme}>
            <Img src={item.image} alt={item.title}/>
            <Info>
                <InfoWithText>
                    <Name theme={theme}>{item.title}</Name>
                    <Description theme={theme}>{item.description}</Description>
                    <StackLine>
                        <Stack theme={theme}>Tech stack : </Stack>
                        {(item.tech_stack.map((stack, id) => <PortfolioStack
                                                                    key={id} 
                                                                    id={id} 
                                                                    array={item.tech_stack} 
                                                                    stack={stack}/>
                                                                    ))}
                    </StackLine>
                </InfoWithText>
                <Links>
                    <Chain href={item.link} target="_blank">
                        <Icon theme={theme} src="https://golub753.github.io/developer-portfolio/images/icons/chain.svg" alt="chain"/>
                        <ChainText theme={theme}>Live Preview</ChainText>
                    </Chain>
                    {(item.code)
                    ? <Chain href={item.code} target="_blank">
                        <Icon theme={theme} src="https://golub753.github.io/developer-portfolio/images/icons/gh.svg" alt="gh"/>
                        <ChainText theme={theme}>View Code</ChainText>
                    </Chain> : false}
                </Links>
            </Info>
        </Block>
     );
}
 
export default PortfolioBlock;