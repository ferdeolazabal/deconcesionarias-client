import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { getVehicleById, startDeleteVehicle } from '../redux/actions/vehicle';


export const VehiclesList = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // @ts-ignore
    const vehicles    = useSelector( state => state.vehicles.vehicles );

    const handleOptions = ( e, id) => {
        e.preventDefault();
        const { value } = e.target;
        switch( value ) {
            case 'get':
                dispatch(getVehicleById(id));
                navigate('/vehicle/' + id);
                break;
            case 'delete':
                dispatch( startDeleteVehicle( id ) );
                break;
            default:
                break;
        };
    };

    const capitalize = ( str = '' ) => {
        return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
    };

return (
    
<div className="container">
    <div className="row">
        <div className="col-12">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles && vehicles.vehicles.map( vehicle => (
                        <tr key={ vehicle.id }>
                            <td>{ capitalize(vehicle.brand) }</td>
                            <td>{ capitalize(vehicle.model) }</td>
                            <td>{ vehicle.year }</td>
                            
                            <td className='d-flex flex-row-reverse'>
                                <div className="btn-group">
                                    <select 
                                        className="btn btn-outline-secondary dropdown-toggle" 
                                        data-bs-toggle="dropdown"
                                        onChange={ (e) => handleOptions(e, vehicle.id) }
                                    >
                                        <option>Opciones</option>
                                        <option className='mb-2 mp-2' value="get">Ver Valores</option>
                                        <option className='mb-2 mp-2' value="delete">Borrar Vehiculo</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    </div>

</div>

)
};