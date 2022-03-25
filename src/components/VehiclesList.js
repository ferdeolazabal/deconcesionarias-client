import React from 'react'
import { useSelector } from 'react-redux';

export const VehiclesList = () => {
    
    // @ts-ignore
    const vehicles = useSelector( state => state.vehicles.vehicles );

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
                                <td>{ vehicle.brand }</td>
                                <td>{ vehicle.model }</td>
                                <td>{ vehicle.year }</td>
                                
                                <td className='d-flex flex-row-reverse'>
                                    <div className="btn-group">
                                        <select className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                            <option>Opciones</option>
                                            <option>Editar</option>
                                            <option>Borrar</option>
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

