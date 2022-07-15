import { Icon } from '../Icon';
import { Link } from 'react-router-dom';

export const Navbar = ({ prevPage, title }) => {
    return (
        <nav>
            { prevPage
                ? <Link to={prevPage}><Icon type="back" /></Link>
                : null
            }
            <p>{title}</p>
        </nav>
    );
};
