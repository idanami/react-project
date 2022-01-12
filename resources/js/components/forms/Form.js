import React, { useContext, useEffect, useState } from 'react';
import Age from '../inputs/Age';
import AGE_OPTION from '../../data/age';
import StatusSelection from '../inputs/StatusSelection';
import ZipCode from '../inputs/ZipCode';
import { FormContext } from '../../context/formContext';
import STATUS_SELECTION from '../../data/status-selection';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
    const { formState, dispatchFormState } = useContext(FormContext)
    const navigate = useNavigate();


    const handleOnSubmit =  (e) => {
        e.preventDefault();
        const data = formState.values;
        axios.post('/api/sendAssignment', data)
            .then(response => {
                        navigate('/companies', {state: response.data.companies})
                })
            .catch(error => {
                console.log("ERROR:: ",error.response);
            });
    }

    return (
        <div  className="content-container">
            <form className='form' onSubmit={handleOnSubmit}>
                <ZipCode />
                <div className='age-container'>
                    <h4>Your Age</h4>
                    <div className='age-lists'>
                        {AGE_OPTION.map(({id, text, value}) => (
                            <Age key={id} id={id} text={text} value={value} />
                        ))}
                    </div>
                    {!formState.validities.isAgeValid && (
                        <div className="error-message">Please select your age range</div>
                    )}
                </div>
                <div className='status-container'>
                    {STATUS_SELECTION.map(({id, text, value}) => (
                        <StatusSelection  key={id} text={text} value={value} />
                    ))}
                </div>
                <button className='button' disabled={!formState.isFormValid}>GET QUOTES</button>
            </form>
        </div>
    );
}

export default Form;
