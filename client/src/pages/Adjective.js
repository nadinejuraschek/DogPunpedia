import { useEffect, useState } from 'react';

import AgainIcon from '../components/AgainIcon';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Adjective = () => {
    const [ adjective, setAdjective ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/pun/adjective',
            method: 'GET'
        }).then(res => {
            setAdjective(res.data[0].pun);
        }).catch(err => console.log(err));
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        axios({
            url: '/api/pun/adjective',
            method: 'GET'
        }).then(res => {
            setAdjective(res.data[0].pun)
        }).catch(err => console.log(err));
    };

    return (
        <>
        <Navbar prevPage='/pun' title='Adjective' />
        <main>
            <div className="btn-container">
                <button className='again-btn' onClick={getNewResult}><AgainIcon /></button>
            </div>
            <p className='random-result'>
                {adjective}
            </p>
        </main>
        </>
    );
};

export default Adjective;