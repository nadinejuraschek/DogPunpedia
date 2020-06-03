// REACT
import React from 'react';

// ICONS
import BookIcon from './BookIcon';
import HashtagIcon from './HashtagIcon';
import PlusIcon from './PlusIcon';

const Button = ({ title, icon }) => {
    return (
        <div className="custom-btn">
            { icon === 'book' 
                ? <BookIcon /> 
                : icon === 'hashtag' 
                    ? <HashtagIcon /> 
                    : icon === 'plus' 
                        ? <PlusIcon />
                        : null
            }
            <p>{title}</p>
        </div>
    );
};

export default Button;