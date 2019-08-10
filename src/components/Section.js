import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

const Section = ({ title, children }) => {
    return (
        <div className="Section">
            <SectionHeader title={title} />
            {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};

export default Section;