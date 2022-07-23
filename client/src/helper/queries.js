import axios from 'axios';

export const getData = (queryURL) => {
    axios({
        url: queryURL,
        method: 'GET'
    }).then(res => {
        const result = res.data[0].pun;
        return result;
    });
};

export const getAdjective = (handleData) => {
    axios({
        url: '/api/pun/adjective',
        method: 'GET'
    }).then(res => handleData(res.data[0].pun)).catch(err => console.log(err));
};

export const getHashtag = (handleData) => {
    axios({
        url: '/api/hashtag',
        method: 'GET'
    }).then(res => handleData(res.data[0].pun)).catch(err => console.log(err));
}

export const getAllHashtags = (handleData) => {
    axios({
        url: '/api/hashtag/all',
        method: 'GET'
    }).then(res => {
        const listRes = res.data;
        const listArray = [];
        listRes.map(item => listArray.push(item.pun));
        handleData(listArray);
    });
};

export const getNoun = (handleData) => {
    axios({
        url: '/api/pun/noun',
        method: 'GET'
    }).then(res => handleData(res.data[0].pun));
};

export const getPhrase = (handleData) => {
    axios({
        url: '/api/pun/phrase',
        method: 'GET'
    }).then(res => handleData(res.data[0].pun));
};

export const createPun = (handleMessage, handleData, newPun) => {
    axios({
        url: '/api/pun/create',
        method: 'POST',
        data: newPun,
    }).then(response => {
        // console.log('Pun in DB: ' + response.data);

        // re-render component
        handleData({ type: '', pun: '' });
        handleMessage('🎉 Pup pup hooray! 🎉');
    }).catch(err => {
        // console.log('Error: ' + err);
        handleMessage('Whelp, that didn\'t work... Try again!');
    });
}
