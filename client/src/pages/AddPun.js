// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import SubmitButton from '../components/SubmitButton';

const AddPun = () => {
    const [ newPun, setNewPun ] = useState({ type: '', pun: '' });
    const [ message, setMessage ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // console.log('Pun to send to DB: ' + newPun);
        axios({
            url: '/api/pun/create',
            method: 'POST',
            data: newPun
        }).then(response => {
            // console.log('Pun in DB: ' + response.data);
            // re-render component
            setNewPun({ type: '', pun: '' });
            setMessage('🎉 Pup pup hooray! 🎉');
        }).catch(err => {
            // console.log('Error: ' + err);
            setMessage('Whelp, that didn\'t work... Try again!');
        });
    };

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setNewPun(newPun => ({...newPun, [name]: value }));
    };

    return (
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
                <SubmitButton />
                <div className='submit-message'>{message}</div>
            </form>
        </main>
    );
};

export default AddPun;