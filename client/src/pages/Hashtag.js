// REACT
import React, { useState, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// ICONS
import AgainIcon from '../components/AgainIcon';

// COMPONENTS
import Navbar from '../components/Navbar';

const Hashtag = () => {
    const [ hashtag, setHashtag ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/hashtag',
            method: 'GET'
        }).then(res => setHashtag(res.data[0].hashtag));
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        axios({
            url: '/api/hashtag',
            method: 'GET'
        }).then(res => setHashtag(res.data[0].hashtag));
    };

    return (
        <>
        <Navbar prevPage='/' title='Hashtag'  />
        <main>
            <div className="btn-container">
                <button className='again-btn' onClick={getNewResult}><AgainIcon /></button>
            </div>
            <p className='random-result'>
                {hashtag}
            </p>
        </main>
        </>
    );
};

export default Hashtag;