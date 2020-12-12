import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './search.styles.scss';
const Search = ({ setActiveProfile, searchString, setActivePage }) => {

    const [userList, setUserList] = useState([]);
    useEffect(() => {
        Axios.get(`https://api.github.com/search/users?q=${searchString}`).then(res => {
            setUserList(res.data.items);
            console.log(res.data);
        }).catch(rej => {
            console.log(rej);
        });
    }, []);

    const clickHandler = (userName) => {
        setActiveProfile(userName);
        setActivePage('Profile');
    }

    return (
        <div className='userCards'>
            {
                userList.map((item, index) => (

                    <div className='userCard' key={index} onClick={(e) => { clickHandler(item.login) }}>
                        <img className='userCardImage' src={item.avatar_url}></img>
                        <h3>{item.login}</h3>
                    </div>

                ))
            }
        </div >

    );
}

export default Search;