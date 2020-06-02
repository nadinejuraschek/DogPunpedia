// REACT
import React from 'react';

// ICONS
import BookIcon from './BookIcon';
import HashtagIcon from './HashtagIcon';

const Button = ({ title, icon }) => {
    return (
        <div className="custom-btn">
            { icon === 'book' 
                ? <BookIcon /> 
                : icon === 'hashtag' 
                    ? <HashtagIcon /> 
                    : null
            }
            <p>{title}</p>
        </div>
    );
};

export default Button;