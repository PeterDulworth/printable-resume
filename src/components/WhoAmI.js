import React from 'react';
import PropTypes from 'prop-types';

const WhoAmI = ({ personalInfo = null }) => {
    if (personalInfo === null) {
        return null;
    }
    const { address, email, github, website, phone } = personalInfo;
    
    return (
        <div className="WhoAmI">
            <div>
                {address} ♦ {phone} ♦ {email} ♦ GitHub: <a href={github.href}>{github.label}</a> ♦ <a href={website.href}>{website.label}</a>
            </div>
        </div>
    );
};

WhoAmI.propTypes = {
    personalInfo: PropTypes.object.isRequired,
}

export default WhoAmI;