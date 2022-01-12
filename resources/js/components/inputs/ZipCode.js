import React, { useContext } from 'react';
import { updateZipCodeAction } from '../../actions/formActions';
import { FormContext } from '../../context/formContext';


function ZipCode() {
    const { formState, dispatchFormState } = useContext(FormContext);

    const handleZipCode = (e) => {
        const zipCodeValue = e.target.value;
        const isNumber = /^[+-]?\d*(?:[.,]\d*)?$/;
        if(isNumber.test(e.target.value)){
            if (zipCodeValue.trim().length >= 5)
                return dispatchFormState(updateZipCodeAction(zipCodeValue, true));
            }
        return dispatchFormState(updateZipCodeAction(zipCodeValue, false));
    }

    return (
        <div className='zipCode-container'>
            <div className='zipCode-input__container'>
                <img className="zip-code__icon" src="https://img.icons8.com/material-rounded/24/000000/marker.png"/>
                <input
                  type="text"
                  placeholder="Zip Code"
                  maxLength={9}
                  pattern="[+-]?\d+(?:[.,]\d+)?"
                  onChange={handleZipCode}
                />
            </div>
                {!formState.validities.isZipCodeValid && (
                    <div className="error-message">Please provide a valid zip code.</div>
                )}
        </div>
    );
}

export default ZipCode;
