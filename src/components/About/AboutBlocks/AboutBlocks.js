import AboutBlock from "../AboutBlock/AboutBlock";
import { Ul } from "../AboutComponents";

const AboutBlocks = ({experience}) => {
    return ( 
        <Ul>
            {experience.map((item, id) => {
                return (
                    <AboutBlock
                        key={id}
                        title={(item.job_title) ? item.job_title : item.specialization}
                        name={(item.company) ? item.company : item.school}
                        location={item.location}
                        employment={item.employment}
                        dates={item.dates}
                    />
                )
            })}
        </Ul>
     );
}
 
export default AboutBlocks;