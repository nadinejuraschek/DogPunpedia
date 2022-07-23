
import { Dispatch } from 'react';
import axios from 'axios';
import { Pun } from './types';

const errorColor = 'background: pink; color: red;'

export const getData = (queryURL: string) => {
    axios({
        url: queryURL,
        method: 'GET'
    }).then(res => {
        const result = res.data[0].pun;
        return result;
    }).catch(err => console.log('%c [helper queries] Could not fetch data. Error: ', errorColor, err));
};

export const getAdjective = (handleData: Dispatch<React.SetStateAction<string>>) => {
    axios({
        url: '/api/pun/adjective',
        method: 'GET'
    }).then(res => {
        handleData(res.data[0].pun);
    }).catch(err => console.log('%c [helper queries] Could not fetch adjective. Error: ', errorColor, err));
};

export const getHashtag = (handleData: Dispatch<React.SetStateAction<string>>) => {
    axios({
        url: '/api/hashtag',
        method: 'GET'
    }).then(res => handleData(res.data[0].pun)).catch(err => console.log('%c [helper queries] Could not fetch hashtag. Error: ', errorColor, err));
}

export const getAllHashtags = (handleData: Dispatch<React.SetStateAction<string[]>>) => {
    axios({
        url: '/api/hashtag/all',
        method: 'GET'
    }).then(res => {
        const listRes = res.data;
        const listArray: string[] = [];
        listRes.map((item: Pun) => listArray.push(item.pun));
        handleData(listArray);
    }).catch(err => console.log('%c [helper queries] Could not fetch all hashtags. Error: ', errorColor, err));
};

export const getNoun = (handleData: Dispatch<React.SetStateAction<string>>) => {
    axios({
        url: '/api/pun/noun',
        method: 'GET'
    }).then(res => handleData(res.data[0].pun)).catch(err => console.log('%c [helper queries] Could not fetch noun. Error: ', errorColor, err));
};

export const getPhrase = (handleData: Dispatch<React.SetStateAction<string>>) => {
    axios({
        url: '/api/pun/phrase',
        method: 'GET'
    }).then(res => handleData(res.data[0].pun)).catch(err => console.log('%c [helper queries] Could not fetch phrase. Error: ', errorColor, err));
};

export const createPun = (handleMessage: Dispatch<React.SetStateAction<string>>, handleData: Dispatch<React.SetStateAction<Pun>>, newPun: Pun) => {
    axios({
        url: '/api/pun/create',
        method: 'POST',
        data: newPun,
    }).then(response => {
        // re-render component
        handleData({ type: '', pun: '' });
        handleMessage('🎉 Pup pup hooray! 🎉');
    }).catch(err => {
        console.log('%c [helper queries] Could not create pun. Error: ', errorColor, err)
        handleMessage('Whelp, that didn\'t work... Try again!');
    });
}
