// REACT
import React, { useState, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// ICONS
import AgainIcon from '../components/AgainIcon';

const Hashtag = () => {
    const [ hashtag, setHashtag ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/hashtag',
            method: 'GET'
        }).then(res => setHashtag(res.data[0].hashtag));
    }, [])

    return (
        <main>
            <p className='random-result'>
                {hashtag}
            </p>
            {/* <AgainIcon /> */}
        </main>
    );
};

export default Hashtag;