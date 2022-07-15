import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Puns = () => (
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

export default Puns;