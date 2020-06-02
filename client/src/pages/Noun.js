// REACT
import React, { useState, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// ICONS
// import AgainIcon from '../components/AgainIcon';

const Noun = () => {
    const [ noun, setNoun ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/pun/noun',
            method: 'GET'
        }).then(res => setNoun(res.data[0].pun));
    }, []);

    return (
        <main>
            <p className='random-result'>
                {noun}
            </p>
            {/* <AgainIcon /> */}
        </main>
    );
};

export default Noun;