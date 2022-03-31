import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

import { startDeleteProperty } from "../redux/actions/properties";

export const PropertiesHelper = ( ) => {

    const dispatch = useDispatch()    
    // @ts-ignore
    const { getVehicleProperty } = useSelector( state => state.property.properties );
    // @ts-ignore
    const { propertyCategories } = useSelector( state => state.categories.categories );

    const properties = getVehicleProperty.map( prop => {
        const category = propertyCategories.find( cat => cat.id === prop.property_category_FK );
        return {
            ...prop,
            category: category.name
        }
    });

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch( startDeleteProperty( id ) );
    }

    return (
        <>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Propiedad</th>
                </tr>
            </thead>
            <tbody>
                {
                    properties && properties.map( property => (
                        <tr key={ property.id }>
                            <td>{ property.id }</td>
                            <td>{ property.category }</td>
                            <td>{ property.name }</td>
                            <td>{ property.value }</td>
                            <IconButton aria-label="delete" size="large">

                                <DeleteIcon
                                    onClick={ (e) => handleDelete(e, property.id) }
                                />
                            </IconButton>
                        </tr>
                    ))
                }
            </tbody>
        </>
    )
};