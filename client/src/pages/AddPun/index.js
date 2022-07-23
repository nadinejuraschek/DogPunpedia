import { Button, Navbar } from '../../components';

import { createPun } from '../../helper/queries';
import { useState } from 'react';

export const AddPun = () => {
    const [ newPun, setNewPun ] = useState({ type: '', pun: '' });
    const [ message, setMessage ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        createPun(setMessage, setNewPun, newPun);
    };

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setNewPun(newPun => ({...newPun, [name]: value }));
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
                        <option value=''>
                            Choose Type
                        </option>
                        <option value='adjective'>
                            Adjective
                        </option>
                        <option value='noun'>
                            Noun
                        </option>
                        <option value='phrase'>
                            Phrase
                        </option>
                        <option value='hashtag'>
                            Hashtag
                        </option>
                    </select>
                </div>
                <Button type="submit" />
                <div className='submit-message'>{message}</div>
            </form>
        </main>
        </>
    );
};
