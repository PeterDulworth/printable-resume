import React from 'react';
import PropTypes from 'prop-types';

const Bullets = ({ items }) => {
    return <ul className="Bullets">
        {items.map((x, i) => 
            <li key={i}>{x}</li>
        )}
    </ul>
};

Bullets.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Bullets;