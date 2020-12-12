import React, { useContext } from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import ThemeContext from '../../theme.context';

import './logo.styles.scss';


const logo = ({ setActivePage }) => {
    let theme = useContext(ThemeContext);
    const clickHandler = (e) => {
        setActivePage('Home');
        console.log(setActivePage);
    }
    return (
        <IconContext.Provider value={{ className: `logo ${theme}` }}>
            <AiFillGithub onClick={clickHandler} />
        </IconContext.Provider>
    );
}

export default React.memo(logo);