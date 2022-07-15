// REACT
import React from 'react';

const List = ({ list }) => (
    <div className="results-list">
        {list.map((item, index) => <div key={index}>{item}</div>)}
    </div>
);

export default List;