import React, { useContext, useState } from 'react';

import ThemeContext from '../theme.context';
import './Main.styles.scss';

import { Route, Switch } from 'react-router';

import Home from './home/home.component';
import Profile from './profile/profile.component';
import Search from './search/search.component';
import NotFound from './notFound/notFound.component';

const Main = ({ activePage, setActiveProfile, searchString, activeProfile, setActivePage }) => {
    let theme = useContext(ThemeContext);

    return (
        <main className={`main ${theme}`}>
            {
                (() => {
                    switch (activePage) {
                        case 'Home': return <Home />
                        case 'Search': return <Search setActiveProfile={setActiveProfile} searchString={searchString} setActivePage={setActivePage} />
                        case 'Profile': return <Profile activeProfile={activeProfile} />
                        default: return <NotFound />
                    }
                })()
            }
        </main>
    );
}

export default React.memo(Main);