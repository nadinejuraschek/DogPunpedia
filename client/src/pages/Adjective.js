// REACT
import React, { useState, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// ICONS
import AgainIcon from '../components/AgainIcon';

const Adjective = () => {
    const [ adjective, setAdjective ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/pun/adjective',
            method: 'GET'
        }).then(res => {
            const result = res.data[0].pun;
            setAdjective(result);
        });
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        axios({
            url: '/api/pun/adjective',
            method: 'GET'
        }).then(res => {
            const result = res.data[0].pun;
            setAdjective(result);
        });
    };

    return (
        <main>
            <p className='random-result'>
                {adjective}
            </p>
            <button className='again-btn' onClick={getNewResult}><AgainIcon /></button>
        </main>
    );
};

export default Adjective;