import { Icon, List, Navbar } from '../../components';
import { getAllHashtags, getHashtag } from '../../helper/queries';
import { useEffect, useState } from 'react';

export const Hashtag = () => {
    const [ displayList, setDisplayList ] = useState(false);
    const [ hashtag, setHashtag ] = useState('');
    const [ list, setList ] = useState('');

    useEffect(() => {
        getHashtag(setHashtag);
        getAllHashtags(setList);
    }, [displayList]);

    const getNewResult = event => {
        event.preventDefault();
        getHashtag(setHashtag);
    };

    const getAllResults = (event) => {
        event.preventDefault();
        setDisplayList(!displayList);
    }

    return (
        <>
            <Navbar prevPage='/' title='Hashtag'  />
            <main>
                <div className="btn-container">
                    <button className='all-btn' onClick={getAllResults}><Icon type={displayList ? 'singleItem' : 'all'} /></button>
                    {!displayList && <button className='again-btn' onClick={getNewResult}><Icon type="again" /></button>}
                </div>
                <div className='random-result'>
                    { displayList && <List list={list} /> }
                    {!displayList && hashtag }
                </div>
            </main>
        </>
    );
};
