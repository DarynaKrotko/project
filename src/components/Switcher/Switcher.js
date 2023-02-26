import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";
import './Switcher.css'


const Switcher = () => {
    const {currentTheme} = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const switcher = () =>{
        dispatch(themeActions.setTheme());
    }

 return (
  <div>
   <button onClick={switcher} className={currentTheme=== 'light'? 'switcher light':'switcher dark'}>{currentTheme === 'light'? 'Темна тема': 'Cвітла тема'}</button>
  </div>
 );
};

export {Switcher};