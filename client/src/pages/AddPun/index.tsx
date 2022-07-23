import { Button, Navbar } from '../../components';
import { ChangeEvent, FormEvent, useState } from 'react';

import { createPun } from '../../helper/queries';
import { Pun } from '../../helper/types';

export const AddPun = () => {
  const [newPun, setNewPun] = useState<Pun>({ type: '', pun: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    createPun(setMessage, setNewPun, newPun);
  };

  const handleChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLSelectElement;
    const name = target.name;
    const value = target.value;
    setNewPun(newPun => ({ ...newPun, [name]: value }));
  };

  return (
    <>
      <Navbar prevPage='/' title='Add a Pun' />
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name='pun'
              type='text'
              placeholder='Enter New Pun Here'
              onChange={handleChange}
              value={newPun.pun}
            />
          </div>
          <div>
            <select name='type' onChange={handleChange} value={newPun.type}>
              <option value=''>Choose Type</option>
              <option value='adjective'>Adjective</option>
              <option value='noun'>Noun</option>
              <option value='phrase'>Phrase</option>
              <option value='hashtag'>Hashtag</option>
            </select>
          </div>
          <Button type='submit' />
          <div className='submit-message'>{message}</div>
        </form>
      </main>
    </>
  );
};
