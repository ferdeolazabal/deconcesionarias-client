import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useform';

import { startNewVehicle } from '../redux/actions/vehicle.js';


export const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ formValues, handleInputChange ] = useForm( {
        brand: 'Ford',
        model: 'A',
        year : '1930',
    } );

    const { brand, model, year } = formValues;

    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(formValues);
        dispatch( startNewVehicle( formValues ) );
        navigate('/inspection');
    }

    const [ submitButton, setSubmitButton ] = useState(true);

    useEffect(() => {
        brand && model && year
        ? setSubmitButton( false )
        : setSubmitButton( true );
        }, [ brand, model, year ]);


    return (
        <div className='container'>
            <h1 className='mt-2 mb-2'>Formulario de Inspección</h1>
            <hr />

            <div className='col-6'>
            <h4>Ingresar Vehiculo </h4>
                    <hr/>
                    <form onSubmit={ handleSubmit }>
                        <input
                            type='text'
                            className={ `form-control mb-2 ${ brand.length > 1 ? 'is-valid' : '' }` }
                            placeholder='Marca'
                            name='brand'
                            // @ts-ignore
                            onChange={ handleInputChange }
                            // @ts-ignore
                            value={ brand }
                            autoComplete='off'
                        />
                        <input
                            type='text'
                            className={ `form-control mb-2 ${ model.length > 0 ? 'is-valid' : '' }` }
                            placeholder='Modelo'
                            name='model'
                            // @ts-ignore
                            onChange={ handleInputChange }
                            // @ts-ignore
                            value={ model }
                            autoComplete='off'
                        />
                        <input
                            type='text'
                            className={ `form-control mb-2 ${ year > 1 ? 'is-valid' : '' }` }
                            placeholder='Año'
                            name='year'
                            // @ts-ignore
                            onChange={ handleInputChange }
                            // @ts-ignore
                            value={ year }
                            autoComplete='off'
                        />
                        <button
                            type='submit'
                            disabled={ submitButton }
                            className='btn mt-2 btn btn-lg btn-primary btn-block form-control'
                        >
                            Ingresar
                        </button>
                    </form>
                </div>

        </div>
    )
}
