import { Network, Img } from "../HeaderComponents/HeaderComponents";

const HeaderNetwork = ({img, link}) => {
    return ( 
        <Network href={link} target='_blank'>
            <Img src={img} alt="Icon"/>
        </Network>
     );
}
 
export default HeaderNetwork;