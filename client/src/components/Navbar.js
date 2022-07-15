import BackIcon from '../components/BackIcon';
import { Link } from 'react-router-dom';

const Navbar = ({ prevPage, title }) => {
    return (
        <nav>
            { prevPage
                ? <Link to={prevPage}><BackIcon /></Link>
                : null
            }
            <p>{title}</p>
        </nav>
    );
};

export default Navbar;