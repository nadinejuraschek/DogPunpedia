import { Icon, Navbar } from '../../components';
import { useEffect, useState } from 'react';

import axios from 'axios';

export const Phrase = () => {
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
                <button className='again-btn' onClick={getNewResult}><Icon type="again" /></button>
            </div>
            <p className='random-result'>
                {phrase}
            </p>
        </main>
        </>
    );
};
