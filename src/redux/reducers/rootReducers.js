import { combineReducers } from 'redux';
import { categoriesReducer } from './categoriesReducer';
import { valueReducer } from './valueReducer';
import { propertyReducer } from './propertyReducer';
import { uiReducer } from './uiReducer';
import { vehiclesReducer } from './vehiclesReducer';

export const rootReducers = combineReducers({
    vehicles   : vehiclesReducer,
    categories : categoriesReducer,
    values     : valueReducer,
    property   : propertyReducer,
    ui         : uiReducer,
});