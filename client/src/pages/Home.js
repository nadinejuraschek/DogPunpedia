// REACT
import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Button from '../components/Button';

const Home = () => {
    return (
        <main>
            <Link to='/pun'>
                <Button title='Puns' icon='book' href='/pun' />
            </Link>
            <Link to='/hashtag'>
                <Button title='Hashtags' icon='hashtag' href='/hashtag' />
            </Link>
        </main>
    );
};

export default Home;