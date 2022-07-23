import { Button, Navbar } from '../../components';

import { Link } from 'react-router-dom';

export const Home = () => (
    <>
        <Navbar title='BarkGrr Punpedia' />
        <main>
            <Link to='/pun'>
                <Button icon="book" title='Puns' />
            </Link>
            <Link to='/hashtag'>
                <Button icon="hashtags" title='Hashtags' />
            </Link>
            <Link to='/create'>
                <Button icon="plus" title='New Pun' />
            </Link>
        </main>
    </>
);