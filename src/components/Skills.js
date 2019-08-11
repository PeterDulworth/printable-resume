import React from 'react';
import PropTypes from 'prop-types';
import Bullets from './Bullets';
import Section from './Section';

const Skills = ({ categories }) => {
    return (
        <Section title="skills">
            <div className="Skills">
                <div className="Skills--columns">
                    {
                        categories.map((skillCategory, skillCategoryIdx) => <SkillColumn {...skillCategory} key={skillCategoryIdx} />)
                    }       
                </div>
            </div>
        </Section>
    );
};

export const SkillColumn = ({ category, items}) => {
    return (
        <div className="Skills--column">
            <div className="Skills--column-title">{category}</div>
            <Bullets items={items} />
        </div>
    );
};

Skills.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Skills;