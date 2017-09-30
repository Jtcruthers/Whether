import { combineReducers } from 'redux';
import locations from './locations';
import forecasts from './forecasts';

const whether = combineReducers({
    locations,
    forecasts
});

export default whether;