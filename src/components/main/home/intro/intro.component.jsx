import React, { useContext } from 'react';
import ThemeContext from '../../../theme.context';
import './intro.styles.scss';

import Profile from './profile.svg';
import Search from './search.svg';
import Repositeries from './graph.svg'

import Cards from './cards/cards.components';

const Intro = () => {

    let theme = useContext(ThemeContext);

    let cardsData = [
        { img: Search, text: 'you can search for any github profile' },
        { img: Profile, text: 'have a look at your favorite profiles without logging in into github' },
        { img: Repositeries, text: 'track performances of different profiles' }
    ];
    return (
        <React.Fragment>
            <h1 className={`introHeader ${theme}`}>Github Finder</h1>
            <p className={`introPara ${theme}`}>
                GitHub is one of the best ways to collaborate on software and discover new projects using Git, the popular Version Control System (VCS). It's safe to say that GitHub is a huge part of the Open Source Software movement that is continually pushing the bounds of technology as we know it by helping developers contribute to more projects and network with other developers.
            </p>

            <div className={`cardHolder ${theme}`}>
                {
                    cardsData.map((item, index) => 
                        <Cards
                            imgData={item.img}
                            text={item.text}
                            key={index}
                            size={index == 1 ? 'xl' : null}
                        />
                    )
                }
            </div>
        </React.Fragment>
    );
}

export default React.memo(Intro);