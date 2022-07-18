import { useSelector } from "react-redux";
import { Burger, BurgerLine } from "../HeaderComponents/HeaderComponents";

const HeaderBurger = ({openMenu}) => {
    const theme = useSelector(state => state.theme.theme);
    return ( 
        <Burger theme={theme} onClick={() => openMenu()}>
            <BurgerLine theme={theme}/>
        </Burger>
     );
}
 
export default HeaderBurger;