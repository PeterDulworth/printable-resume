import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ columnTitles, children }) => {
    return (
        <div className="Skills">
            <div className="Skills--columns">
                {
                    children.map((child, i) => 
                        <div key={i} className="Skills--column">
                            <div className="Skills--column-title">{columnTitles[i]}</div>
                            {child}
                        </div>)
                }
            </div>
        </div>
    );
};

Skills.propTypes = {
    columnTitles: PropTypes.array.isRequired,
    children: PropTypes.array.isRequired,
};

export default Skills;