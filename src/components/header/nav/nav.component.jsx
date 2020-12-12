import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import ThemeContext from '../../theme.context';

import './nav.styles.scss';


const NavBar = ({ setActivePage, setSearchString }) => {

    let theme = useContext(ThemeContext);

    const [searchInput, setSearchInput] = useState('');

    const InputChangeHandler = (e) => {
        setSearchInput(e.target.value);
    }

    const clickHandler = (e) => {
        setActivePage('Search');
        setSearchString(searchInput);
    }

    return (
        <nav className={`navigationBar ${theme}`}>
            <input
                className={`searchInput ${theme}`}
                type='text'
                value={searchInput}
                onChange={InputChangeHandler}
            />
            <IconContext.Provider value={{ className: `searchIcon ${theme}` }}>
                <AiOutlineSearch onClick={clickHandler} />
            </IconContext.Provider>
        </nav>
    );
}

export default React.memo(NavBar);