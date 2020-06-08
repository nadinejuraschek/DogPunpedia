// REACT
import React from 'react';
import { Link } from 'react-router-dom';

// ICONS
import BackIcon from '../components/BackIcon';

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