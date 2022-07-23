import { Icon, List, Navbar } from '../../components';
import { MouseEvent, useEffect, useState } from 'react';
import { getAllHashtags, getHashtag } from '../../helper/queries';

export const Hashtag = () => {
  const [displayList, setDisplayList] = useState(false);
  const [hashtag, setHashtag] = useState('');
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    getHashtag(setHashtag);
    getAllHashtags(setList);
  }, [displayList]);

  const getNewResult = (event: MouseEvent): void => {
    event.preventDefault();
    getHashtag(setHashtag);
  };

  const getAllResults = (event: MouseEvent): void => {
    event.preventDefault();
    setDisplayList(!displayList);
  };

  return (
    <>
      <Navbar prevPage='/' title='Hashtag' />
      <main>
        <div className='btn-container'>
          <button className='all-btn' onClick={getAllResults}>
            <Icon type={displayList ? 'singleItem' : 'all'} />
          </button>
          {!displayList && (
            <button className='again-btn' onClick={getNewResult}>
              <Icon type='again' />
            </button>
          )}
        </div>
        <div className='random-result'>
          {displayList && <List list={list} />}
          {!displayList && hashtag}
        </div>
      </main>
    </>
  );
};
