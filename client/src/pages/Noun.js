// REACT
import React, { useState, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// ICONS
import AgainIcon from '../components/AgainIcon';

const Noun = () => {
    const [ noun, setNoun ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/pun/noun',
            method: 'GET'
        }).then(res => setNoun(res.data[0].pun));
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        axios({
            url: '/api/pun/noun',
            method: 'GET'
        }).then(res => setNoun(res.data[0].pun));
    };

    return (
        <main>
            <div className="btn-container">
                <button className='again-btn' onClick={getNewResult}><AgainIcon /></button>
            </div>
            <p className='random-result'>
                {noun}
            </p>
        </main>
    );
};

export default Noun;