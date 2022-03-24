import { Rating } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { valueCreate } from "../redux/actions/value";

const Content = ( { id, name, value} ) => {

    const dispatch = useDispatch()
    const state = useSelector( state => state );
    console.log( state );

    // const [value, setValue] = useState(2);

    const updateValue = ( event, newValue ) => {
        console.log( event, newValue );
        dispatch( valueCreate( event, newValue ) );
        // dispatch({
        //     type: types.valueCreate,
        //     payload: { id, value }
        // });
    }

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
                onChange={ ( event, newValue ) => updateValue( event, newValue ) }
            />

        </div>
    )
};

export default Content;