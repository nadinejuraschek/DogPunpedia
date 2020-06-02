// REACT
import React, { useState, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// ICONS
// import AgainIcon from '../components/AgainIcon';

const Phrase = () => {
    const [ phrase, setPhrase ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/pun/phrase',
            method: 'GET'
        }).then(res => setPhrase(res.data[0].pun));
    }, []);

    return (
        <main>
            <p className='random-result'>
                {phrase}
            </p>
            {/* <AgainIcon /> */}
        </main>
    );
};

export default Phrase;