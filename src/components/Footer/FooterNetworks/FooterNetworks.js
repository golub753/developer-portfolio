import FooterNetwork from "../FooterNetwork/FooterNetwork";
import { useSelector } from "react-redux";
import { Networks } from "../FooterComponents/FooterComponents";

const FooterNetworks = () => {
    const networks = useSelector(state => state.networks.networks);
    return ( 
        <Networks>
            {(networks.map((item, key) => {
                return (
                    <FooterNetwork
                        img={item.img}
                        link={item.link}
                        key={key}
                    />
                )
            }))}
        </Networks>
     );
}
 
export default FooterNetworks;