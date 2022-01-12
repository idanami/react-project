import React, { useReducer } from 'react'
import { formInitialState, formReducer } from '../reducer/formReducer';

export const FormContext = React.createContext()

const FormContextProvider = (props) => {
    const [formState, dispatchFormState] = useReducer(formReducer, formInitialState)

    return (
        <FormContext.Provider value={{ formState, dispatchFormState }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;
