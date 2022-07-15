import { Icon } from '../Icon';

export const Button = ({ icon, title, type }) => {
    if (type === 'submit') {
        return <button className='submit' type='submit'>Add to Database</button>
    }

    return (
        <div className="custom-btn">
            { icon && <Icon type={icon} /> }
            <p>{title}</p>
        </div>
    );
};
