import { Block, Wrapper, Text, GradientText, ImageWrapper, Image } from "./MainComponents/MainComponents";
import { useSelector } from "react-redux";

const Main = () => {
    const theme = useSelector(state => state.theme.theme)
    return ( 
        <Block>
            <Wrapper>
                <Text theme={theme}>
                Hi👋,<br></br>
                My name is<br></br>
                <GradientText>Anton Holub</GradientText><br></br>
                I am a Frontend Developer
                </Text>
                <ImageWrapper>
                    <Image src="https://golub753.github.io/developer-portfolio/images/images/mainPhoto.jpg" alt="mainPhoto"/>
                </ImageWrapper>
            </Wrapper>
        </Block>
     );
}
 
export default Main;