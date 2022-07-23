import { Icon, Navbar } from '../../components';
import { useEffect, useState } from 'react';

import { getNoun } from '../../helper/queries';

export const Noun = () => {
    const [ noun, setNoun ] = useState('');

    useEffect(() => {
        getNoun(setNoun);
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        getNoun(setNoun);
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
