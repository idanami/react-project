import React, { useContext, useEffect, useState } from 'react';
import { updateAgeAction } from '../../actions/formActions';
import { FormContext } from '../../context/formContext';

function Age({ text, value }) {
    const { formState, dispatchFormState } = useContext(FormContext);
    const [ageInput, setAgeInput] = useState('button button-age__input');

    const handleAge = () => {
        if(formState.values.age === value)
            return dispatchFormState(updateAgeAction('', false));

        return dispatchFormState(updateAgeAction(value, true));

    };

    useEffect(() => {
        const ageInputClassName = formState.values.age === value ? 'button button-age__input selected' : 'button button-age__input';
        setAgeInput(ageInputClassName);
    })

    return (
        <div  className='age-list'>
            <button type='button' className={ageInput} onClick={handleAge} >
                {text}
            </button>
        </div>
    );
}

export default Age;
