import { useSelector } from 'react-redux';
import PropertyValue from '../components/PropertyValue';
import { useNavigate } from "react-router-dom";

export const GetValues = () => {

    const navigate = useNavigate()
    // @ts-ignore
    const { vehicle } = useSelector( state => state.vehicles.vehicle );
    // @ts-ignore
    const { getVehicleProperty } = useSelector( state => state.property.properties );
    // @ts-ignore
    const { propertyCategories } = useSelector( state => state.categories.categories );


    const values = vehicle && vehicle?.properties?.map( prop => {
        const property = getVehicleProperty.find( cat => cat.id === prop.vehicle_property_FK );
        // anexar la categoria
        const category = propertyCategories.find( cat => cat.id === property.property_category_FK );
        return {
            ...prop,
            category: category.name,
            property: property.name,
            value: prop.value || 0
        }
    });

    const capitalize = ( str = '' ) => {
        return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
    };

    const handleSubmit  = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <>
        <div className="container">
            <h3 className="mt-4 mb-4"> 
                { capitalize(vehicle?.brand) } { capitalize(vehicle?.model) } { vehicle?.year }
                <br />
                    {/* {
                        values && values.map( value => (
                            <span key={ value.id } >
                                <PropertyValue
                                    id={ value.id }
                                    name={ value.property }
                                    value={ value.value }
                                />
                            </span>
                        ))
                    } */}
            </h3>
            
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th>Propiedad</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {values && values.map( value => (
                                <tr key={ value.id }>
                                    <td>{ value.category }</td>
                                    <td>{ value.property }</td>
                                    {/* <td>{ value.value }</td> */}
                                    <PropertyValue
                                        id={ value.id }
                                        name={ value.null }
                                        value={ value.value }
                                />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="fixed-botto">
                        < div className="d-grid gap-2 col-5 mx-auto">
                            
                            <button 
                                className="mb-5 btn btn-lg btn-block btn-primary"
                                type="button"
                                onClick={ handleSubmit }
                            >
                                Volver
                            </button>

                        </div>
                    </div>
        </div>


        </>
    );
};
