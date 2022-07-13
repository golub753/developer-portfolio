import { useSelector } from 'react-redux'
import Technology from './Technology/Technology';
import { Section, Title, Subtitle, Technologies } from "./TechsComponents/TechsComponents";

const Techs = () => {
    const theme = useSelector(state => state.theme.theme)
    const technologies = useSelector(state => state.tech)
    return ( 
        <Section>
            <Title theme={theme}>My Tech Stack</Title>
            <Subtitle theme={theme}>Technologies I’ve been working with recently</Subtitle>
            <Technologies>
                {technologies.map((item, id) => {
                    return (
                        <Technology
                            icon={item.icon}
                            alt={item.alt}
                            key={id}
                        />
                    )
                })}
            </Technologies>
        </Section>
     );
}
 
export default Techs;