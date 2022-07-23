import { Icon, Navbar } from '../../components';
import { useEffect, useState } from 'react';

import { getPhrase } from '../../helper/queries';

export const Phrase = () => {
    const [ phrase, setPhrase ] = useState('');

    useEffect(() => {
        getPhrase(setPhrase);
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        getPhrase(setPhrase);
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
