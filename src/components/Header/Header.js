import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


import './Header.css'
import {searchActions} from "../../redux";
import {Switcher} from "../Switcher/Switcher";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const keyword = createRef();
    const {currentTheme} = useSelector(state => state.theme);

    const onSearch = () => {
        if(keyword.current.value !== null){
            dispatch(searchActions.setQuery(keyword.current.value))
            navigate('/search')
            keyword.current.value = ''
        }
    };

    return (
        <div className={currentTheme=== 'light'? 'header light':'header dark'}>
            <div className={'part nav'}><NavLink to={''}>Фільми</NavLink></div>
            <div className={'part nav'}><NavLink to={'/tvShows'}>Телешоу</NavLink></div>
            <div className={'part nav'}><NavLink to={'genres'}>Жанри</NavLink></div>
            <div className={'part'}>
                <div className={'input-box'}>
                    <input type={"text"}  className={'input'} ref={keyword} placeholder={'Пошук...'} />
                    <FontAwesomeIcon  className={'icon'} icon={faMagnifyingGlass} onClick={onSearch}/>
                </div>

            </div>
            <div className={'part'}>
                <div>
                    <Switcher/>
                </div>
            </div>
            <div className={'part user'}>
                <div className={'circle'}>D</div>
            </div>
        </div>
    );
};

export {Header};
