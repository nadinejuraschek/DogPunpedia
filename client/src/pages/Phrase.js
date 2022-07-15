import { useEffect, useState } from 'react';

import AgainIcon from '../components/AgainIcon';
import Navbar from '../components/Navbar';
import axios from 'axios';

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