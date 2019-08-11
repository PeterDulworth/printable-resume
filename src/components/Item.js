import React from 'react';
import PropTypes from 'prop-types';
import ItemHeader from './ItemHeader';
import Bullets from './Bullets';

// replace any links in the line with anchor tags
const replaceWithLinks = (wordList, linksWords, linksMap) => {
    return wordList.map(word => {
        if (linksWords.indexOf(word) !== -1) {
            return <a href={linksMap[word]}>{word}</a>;
        }
        return word;
    }).map((t, index) => 
        <React.Fragment key={index}>
            <span>{t} </span>
        </React.Fragment>
    );
};

const Item = ({ title, subTitle, date, positionTitle, bullets = [], body, links }) => {
    const linkLabels = Object.keys(links || {});

    const newBullets = bullets.map(bullet => {
        return replaceWithLinks(bullet.split(' '), linkLabels, links);
    });

    const newBody = body.map(bullet => {
        return replaceWithLinks(bullet.split(' '), linkLabels, links);
    });
        
    return (<div className="Item">
        <ItemHeader title={title} subTitle={subTitle} date={date} />
        <i>{positionTitle}</i>
        <Bullets items={newBullets} />
        {newBody}
    </div>); 
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    positionTitle: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired,
};

export default Item;