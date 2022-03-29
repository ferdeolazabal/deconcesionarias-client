import { useDispatch, useSelector } from 'react-redux'
import { IconButton  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { startDeleteProperty } from '../redux/actions/properties';
import { NavBar } from '../components/NavBar';

const PropertiesEdit = () => {

    const dispatch = useDispatch()
    // @ts-ignore
    const { getVehicleProperty } = useSelector( state => state.property.properties );
    console.log('getVehicleProperty', getVehicleProperty)

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch( startDeleteProperty( id ) );
    }


return (

    <div className="container">
        <NavBar />
        <h1 className='mt-4 mb-4'>Formulario de Inspección</h1>
        <hr />
        <div className='row mt-4'>
            <div className='col-5 mt-3'>
                <h4>Propiedades</h4>
                <hr/>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            {/* <th scope="col">Valor</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {getVehicleProperty && getVehicleProperty.map( property => (
                            <tr key={ property.id }>
                                <td>{ property.id }</td>
                                <td>{ property.name }</td>
                                <td>{ property.value }</td>
                                <IconButton aria-label="delete" size="large">
                                        <DeleteIcon
                                            onClick={ (e) => handleDelete(e, property.id) }
                                        />
                                </IconButton>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>

    </div>



    
)
};

export default PropertiesEdit;