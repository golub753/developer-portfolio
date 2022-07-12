import { useSelector } from "react-redux/es/exports";
import { Networks } from "../HeaderComponents/HeaderComponents";
import HeaderNetwork from '../HeaderNetwork/HeaderNetwork';

const HeaderNetworks = () => {
    const networks = useSelector(state => state.networks.networks);
    return ( 
        <Networks>
            {(networks.map((item, key) => {
                return (
                    <HeaderNetwork
                        img={item.img}
                        link={item.link}
                        key={key}
                    />
                )
            }))}
        </Networks>
     );
}
 
export default HeaderNetworks;