import { Icon, List, Navbar } from '../../components';
import { useEffect, useState } from 'react';

import axios from 'axios';

export const Hashtag = () => {
    const [ hashtag, setHashtag ] = useState('');
    const [ list, setList ] = useState('');

    useEffect(() => {
        axios({
            url: '/api/hashtag',
            method: 'GET'
        }).then(res => setHashtag(res.data[0].pun));
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        axios({
            url: '/api/hashtag',
            method: 'GET'
        }).then(res => setHashtag(res.data[0].pun));
    };

    const getAllResults = (event) => {
        event.preventDefault();
        axios({
            url: '/api/hashtag/all',
            method: 'GET'
        }).then(res => {
            const listRes = res.data;
            const listArray = [];
            listRes.map(item => listArray.push(item.pun));
            setList(listArray);
        });
    }

    return (
        <>
        <Navbar prevPage='/' title='Hashtag'  />
        <main>
            <div className="btn-container">
                <button className='all-btn' onClick={getAllResults}><Icon type="all" /></button>
                <button className='again-btn' onClick={getNewResult}><Icon type="again" /></button>
            </div>
            <div className='random-result'>
                { list ? <List list={list} /> : hashtag}
            </div>
        </main>
        </>
    );
};
