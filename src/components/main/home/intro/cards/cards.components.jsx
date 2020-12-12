import React from 'react';
import './cards.styles.scss';

const Cards = ({ imgData, text, size }) => {
    return (
        <div className={`introCards ${size}`}>
            <img className='introImage' src={imgData} />
            <p className='introText'>{text}</p>
        </div>
    );
}

export default React.memo(Cards);
