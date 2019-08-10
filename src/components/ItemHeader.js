import React from 'react';
import PropTypes from 'prop-types';

// must be a class component for printing to work :/
const ItemHeader = ({ title, subTitle, date }) => {
    return <div className="ItemHeader">
        <div className="ItemHeader--title">
            <span className="ItemHeader--title-main">{title}</span>
            <span className="ItemHeader--title-sub">{subTitle}</span>
        </div>
        <div className="ItemHeader--date">{date}</div>
    </div>;
};

ItemHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    date: PropTypes.string.isRequired,
};

export default ItemHeader;