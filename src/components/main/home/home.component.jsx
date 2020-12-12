import React from 'react';
import './home.style.scss';

import Intro from './intro/intro.component';

const Home = () => {
    return (
        <React.Fragment>
            <Intro />
        </React.Fragment>
    );
}

export default React.memo(Home);