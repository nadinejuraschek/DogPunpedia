import { Icon, Navbar } from '../../components';
import { useEffect, useState } from 'react';

import axios from 'axios';

export const Noun = () => {
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
        <>
        <Navbar prevPage='/pun' title='Noun'  />
        <main>
            <div className="btn-container">
                <button className='again-btn' onClick={getNewResult}><Icon type="again" /></button>
            </div>
            <p className='random-result'>
                {noun}
            </p>
        </main>
        </>
    );
};
