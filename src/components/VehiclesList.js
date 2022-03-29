import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { IconButton  } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// 
import { getVehicleById, startDeleteVehicle } from '../redux/actions/vehicle';


export const VehiclesList = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // @ts-ignore
    const vehicles    = useSelector( state => state.vehicles.vehicles );

    const capitalize = ( str = '' ) => {
        return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
    }

    const handleOptions = ( e, id) => {
        e.preventDefault();
        const { value } = e.target;

        switch( value ) {
            case 'edit':
                console.log('edit', id)
                dispatch(getVehicleById(id));
                navigate('/inspection');
                break;
            case 'delete':
                dispatch( startDeleteVehicle( id ) );
                break;
            default:
                break;
        };
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
                                <td>{ capitalize( vehicle.brand ) }</td>
                                <td>{ capitalize( vehicle.model ) }</td>
                                <td>{ vehicle.year }</td>
                                
                                <td className='d-flex flex-row-reverse'>
                                    <div className="btn-group">

                                    {/* <IconButton aria-label="delete" size="large">
                                        <EditIcon />
                                    </IconButton>

                                    <IconButton aria-label="delete" size="large">
                                        <DeleteIcon />
                                    </IconButton> */}

                                        <select 
                                            className="btn btn-outline-secondary dropdown-toggle" 
                                            data-bs-toggle="dropdown"
                                            onChange={ (e) => handleOptions(e, vehicle.id) }
                                        >
                                            <option>Opciones</option>
                                            {/* <option className='mb-2 mp-2' value="edit">Editar Valores</option> */}
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

