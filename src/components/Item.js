import React from 'react';
import PropTypes from 'prop-types';
import ItemHeader from './ItemHeader';

const Item = ({ children }) => {
    return (<div className="Item">
         {children}
    </div>); 
};

Item.propTypes = {
    children: PropTypes.array.isRequired,
};

export const WorkItem = ({ title, subTitle, date, position, children }) => {
    return (<Item>
         <ItemHeader title={title} subTitle={subTitle} date={date} />
         <i>{position}</i>
         {children}
    </Item>);
};

WorkItem.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};

export default Item;