import React, { useContext } from 'react';
import ThemeContext from '../theme.context';
import './header.styles.scss';

import Logo from './logo/logo.component';
import NavBar from './nav/nav.component';

const Header = ({ setActivePage, setSearchString }) => {
    let theme = useContext(ThemeContext);
    return (
        <header className={`header ${theme}`}>
            <Logo setActivePage={setActivePage} />
            <NavBar setActivePage={setActivePage} setSearchString={setSearchString} />
        </header>
    );
}

export default React.memo(Header);

