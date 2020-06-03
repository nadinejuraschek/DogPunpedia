// REACT
import React from 'react';

// COMPONENTS
import SubmitButton from '../components/SubmitButton';

const AddPun = () => {
    return (
        <main>
            <form>
                <div>
                    <input placeholder='Enter New Pun Here'></input>
                </div>
                <div>
                    <select>
                        <option>
                            Adjective
                        </option>
                        <option>
                            Noun
                        </option>
                        <option>
                            Phrase
                        </option>
                        <option>
                            Hashtag
                        </option>
                    </select>
                </div>
            </form>
            <SubmitButton />
        </main>
    );
};

export default AddPun;