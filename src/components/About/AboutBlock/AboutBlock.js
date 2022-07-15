import { Li, Wrapper, NameInfo, PartInfo, Name, BottomInfo, SubscInfo, Icon, Subsc, Employment, Dates, DateText } from "../AboutComponents";
import { useSelector } from "react-redux/es/exports";

const AboutBlock = ({title, name, location, employment, dates}) => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Li>
            <Wrapper>
                <NameInfo>
                    <Name theme={theme}>
                        {title}
                    </Name>
                    <BottomInfo>
                        <SubscInfo>
                            <Icon src="../images/icons/office.svg" alt="office"/>
                            <Subsc theme={theme}>
                                {name}
                            </Subsc>
                        </SubscInfo>
                        {(location) ? 
                            <SubscInfo>
                            <Icon src="../images/icons/location.svg" alt="location"/>
                            <Subsc theme={theme}>
                                {location}
                            </Subsc>
                        </SubscInfo> : false}
                    </BottomInfo>
                </NameInfo>
                <PartInfo>
                    <Employment>
                        {employment}
                    </Employment>
                    <Dates>
                        <Icon src="../images/icons/calendar.svg" alt="calendar"/>
                        <DateText theme={theme}>
                            {dates}
                        </DateText>
                    </Dates>
                </PartInfo>
            </Wrapper>
        </Li>
     );
}
 
export default AboutBlock;