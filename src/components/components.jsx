import React, { useState } from 'react';

import './components.styles.scss';

import ThemeContext from './theme.context';

import Header from './header/header.component';
import Main from './main/Main.component';
import Footer from './footer/footer.component';
const Components = () => {
    const [activePage, setActivePage] = useState('Home');
    const [activeProfile, setActiveProfile] = useState(null);
    const [searchString, setSearchString] = useState('');
    return (
        <ThemeContext.Provider value='regular'>
            <Header setActivePage={setActivePage} setSearchString={setSearchString} />
            <Main setActivePage={setActivePage} activePage={activePage} setActiveProfile={setActiveProfile} searchString={searchString} activeProfile={activeProfile} />
        </ThemeContext.Provider>
    );
}

export default Components;
