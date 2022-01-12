import React, { useState } from "react";
import { Icon } from '@iconify/react';

const Company = ({img, name, description}) => {
    const [descriptionClass, setdescriptionClass] = useState('company-description');
    const [icon, setIcon] = useState('jam:chevron-circle-down');

    const showOrHideDescription = () => {
        descriptionClass === 'company-description'
        ?
            setdescriptionClass('company-description show-description')
        : setdescriptionClass('company-description');

        icon === 'jam:chevron-circle-down'
        ? setIcon('jam:chevron-circle-up')
        : setIcon('jam:chevron-circle-down');

    }

    return (
        <div className= 'company'>
            <div className="iconify-star__icon">
                <Icon icon="emojione:star" />
            </div>
            <img src={img} className='company-img'></img>
            <h4 className='company-title'>{name}</h4>
            <p className={descriptionClass}>{description}</p>
            <div className="divider-container">
                <div className="divider"></div>
                <Icon icon={icon} />
            </div>
            <button className="button button-showQuote" type="button" onClick={showOrHideDescription} >
                View My Quote
            </button>
        </div>
    )

}

export default Company;
