import React, { useEffect, useState } from 'react';
import './profile.styles.scss';
import ThemeContext from '../../theme.context';
import Axios from 'axios';

const Profile = ({ activeProfile }) => {
    const [userData, setUserData] = useState('');
    useEffect(() => {
        Axios.get(`https://api.github.com/users/${activeProfile}`).then(res => {
            setUserData(res.data);
        }).catch(rej => {
            console.log(rej)
        });
    }, [])
    return (
        <div className='profile'>
            <img src={userData.avatar_url} />
            <h1>{userData.login}</h1>
            <a href={userData.html_url}>Visit Profile</a>
        </div>
    );
}

export default React.memo(Profile);


