import React from 'react';
import PropTypes from 'prop-types';

// must be a class component for printing to work :/
const SectionHeader = ({ title }) => {
    return <div className="SectionHeader">
        {title}
    </div>;
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionHeader;