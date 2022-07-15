import { useDispatch, useSelector } from "react-redux";
import { Moon, Sun, Toggle } from "../../containers/Container/Main";
import {switchThemeAction} from '../../store/themeReducer';

const Toggler = () => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();

    const switchTheme = () => {
        let newTheme;
        ((theme === 'white') ? newTheme = 'black' : newTheme = 'white');
        console.log(newTheme);
        dispatch(switchThemeAction(newTheme))
    }
    return ( 
        <Toggle theme={theme} onClick={() => switchTheme()}>
            <Sun theme={theme} src="https://golub753.github.io/developer-portfolio/images/images/sun.png"/>
            <Moon theme={theme} src="https://golub753.github.io/developer-portfolio/images/images/moon.png"/>
        </Toggle>
     );
}
 
export default Toggler;