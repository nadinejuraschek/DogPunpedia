// REACT
import React from 'react';

const List = ({ list }) => {
    return (
        <div className="results-list">
            {
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div>
    );
};

export default List;