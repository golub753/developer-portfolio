import { Network, Img } from "../FooterComponents/FooterComponents";

const FooterNetwork = ({img, link}) => {
    return ( 
        <Network href={link} target='_blank'>
            <Img src={img} alt="Icon"/>
        </Network>
     );
}
 
export default FooterNetwork;