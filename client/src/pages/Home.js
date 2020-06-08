// REACT
import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
        <Navbar title='BarkGrr Punpedia' />
        <main>
            <Link to='/pun'>
                <Button title='Puns' icon='book' />
            </Link>
            <Link to='/hashtag'>
                <Button title='Hashtags' icon='hashtag' />
            </Link>
            <Link to='/create'>
                <Button title='New Pun' icon='plus' />
            </Link>
        </main>
        </>
    );
};

export default Home;