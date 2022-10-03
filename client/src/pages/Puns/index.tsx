import { Button, Navbar } from '../../components';

import { Link } from 'react-router-dom';

export const Puns = () => (
    <>
        <Navbar prevPage='/' title='Puns'  />
        <main>
            <Link to='/pun/adjective'>
                <Button title='Adjective' />
            </Link>
            <Link to='/pun/noun'>
                <Button title='Noun' />
            </Link>
            <Link to='/pun/phrase'>
                <Button title='Phrase' />
            </Link>
        </main>
    </>
);