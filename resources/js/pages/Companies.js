import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Company from '../components/Company';
import { FormContext } from '../context/formContext';

const Companies = () => {
    const { formState, dispatchFormState } = useContext(FormContext);
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(state === null)
            navigate('/home');

        console.log(state)
    }, [])

    return (
        <main className="homepage">
            {state === null || state.length === 0 ? (
                <div className="noCompany-container">
                    <h1>No Company Were Found</h1>
                    <Link to="/" className="button">
                        Home
                    </Link>
                </div>
            ) :
                <div className='company-lists content-container'>
                    {state.map(({id, img, name, description}) => (
                        <Company key={id} img={img} name={name} description={description} />
                    ))}
                </div>
            }
        </main>
    );
};

export default Companies;
