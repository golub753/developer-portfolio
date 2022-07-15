import {Section} from '../containers/Container/Section';
import Container from '../containers/Container/Container';
import { useSelector } from 'react-redux';
import { Description, Title } from '../components/About/AboutComponents';
import AboutBlocks from '../components/About/AboutBlocks/AboutBlocks';

const About = () => {
    const theme = useSelector(state => state.theme.theme);
    const workExperience = useSelector(state => state.experience.work);
    const educationExperience = useSelector(state => state.experience.education);
    const coursesExperience = useSelector(state => state.experience.courses);
    return ( 
        <Section style={{padding: '100px 0'}}>
            <Container>
                <Title theme={theme}>About Me</Title>
                <Description theme={theme}>Hello everyone, my name's Anton Holub, I'm a front-end developer with React JS. I have two years commercial experience with stack: HTML / CSS / SCSS / JavaScript. But last half a year I practiced with my new tech stack: React Js / Redux / JavaScript / TypeScript / GraphQL. I want to get a commercial experience and help you with solution your tasks . Have a nice day, guys!:)</Description>
                <Title theme={theme}>Work Experience</Title>
                    <AboutBlocks experience={workExperience}/>
                <Title theme={theme}>Education</Title>
                    <AboutBlocks experience={educationExperience}/>
                <Title theme={theme}>Courses</Title>
                    <AboutBlocks experience={coursesExperience}/>
            </Container>
        </Section>
     );
}
 
export default About;