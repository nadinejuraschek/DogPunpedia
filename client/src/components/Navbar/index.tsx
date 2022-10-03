import { INavbar } from './types';
import { Icon } from '../Icon';
import { Link } from 'react-router-dom';

export const Navbar = ({ prevPage, title }: INavbar): JSX.Element => {
  return (
    <nav>
      {prevPage && (
        <Link to={prevPage}>
          <Icon type='back' />
        </Link>
      )}
      <p>{title}</p>
    </nav>
  );
};
