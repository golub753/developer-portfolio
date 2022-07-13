import { LogoWrapper, Logo } from "../TechsComponents/TechsComponents";

const Technology = ({icon, alt}) => {
    return ( 
        <LogoWrapper>
            <Logo src={icon} alt={alt}/>
        </LogoWrapper>
     );
}
 
export default Technology;