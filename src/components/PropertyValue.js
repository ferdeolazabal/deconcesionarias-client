import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { valueCreate } from "../redux/actions/value";

const PropertyValue = ( { id, name, value} ) => {

    const dispatch = useDispatch()

    const updateValue = ( id, e ) => {
        dispatch( valueCreate( id, e.target.value ) );
    };

    return (
        <div
            className="content"
            key={ id }
        >
            <div>{ name } </div>
    
            <Rating
                size='small'
                name={`simple-controlled-${ id }`}
                value={ value }
                onChange={(newValue) => {
                    updateValue( id, newValue );}}
            />

        </div>
    )
};

export default PropertyValue;