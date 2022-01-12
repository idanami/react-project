import React, { useContext } from 'react';
import { updateStatusAction } from '../../actions/formActions';
import { FormContext } from '../../context/formContext';

function StatusSelection({ text, value }) {
    const { formState, dispatchFormState } = useContext(FormContext);

    const handleOnClickStatusInput = (e) => {
        const isChecked = event.target.checked;

        dispatchFormState(updateStatusAction(value, isChecked))
    }

    return (
        <div className='status-input__container'>
            <input type="checkbox" id={value} name={value} onClick={handleOnClickStatusInput}/>
            <label htmlFor={value}>{text}</label>
        </div>
    );
}

export default StatusSelection;
