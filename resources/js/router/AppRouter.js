import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Form from '../components/forms/Form';
import FormContextProvider from '../context/formContext';
import Companies from '../pages/Companies';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <FormContextProvider>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Form />} />
                    <Route path="/companies" element={<Companies />} />
                </Routes>
            </FormContextProvider>
        </BrowserRouter>
    );
}

export default AppRouter;


if (document.getElementById('app')) {
    ReactDOM.render(<AppRouter />, document.getElementById('app'));
}
