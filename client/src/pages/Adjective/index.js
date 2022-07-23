import { Icon, Navbar } from '../../components';
import { useEffect, useState } from 'react';

import { getAdjective } from '../../helper/queries';

export const Adjective = () => {
    const [ adjective, setAdjective ] = useState('');

    useEffect(() => {
        getAdjective(setAdjective);
    }, []);

    const getNewResult = (event) => {
        event.preventDefault();
        getAdjective(setAdjective);
    };

    return (
        <>
        <Navbar prevPage='/pun' title='Adjective' />
        <main>
            <div className="btn-container">
                <button className='again-btn' onClick={getNewResult}><Icon type="again" /></button>
            </div>
            <p className='random-result'>
                {adjective}
            </p>
        </main>
        </>
    );
};
