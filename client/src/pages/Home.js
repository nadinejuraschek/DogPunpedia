import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => (
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

export default Home;