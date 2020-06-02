// NPM PACKAGES
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
