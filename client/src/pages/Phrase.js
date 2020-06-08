// REACT
import React, { useState, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// ICONS
import AgainIcon from '../components/AgainIcon';

// COMPONENTS
import Navbar from '../components/Navbar';

const Phrase = () => {
    const [ phrase, setPhrase ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/pun/phrase',
            method: 'GET'
        }).then(res => setPhrase(res.data[0].pun));
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        axios({
            url: '/api/pun/phrase',
            method: 'GET'
        }).then(res => setPhrase(res.data[0].pun));
    };

    return (
        <>
        <Navbar prevPage='/pun' title='Phrase'  />
        <main>
            <div className="btn-container">
                <button className='again-btn' onClick={getNewResult}><AgainIcon /></button>
            </div>
            <p className='random-result'>
                {phrase}
            </p>
        </main>
        </>
    );
};

export default Phrase;