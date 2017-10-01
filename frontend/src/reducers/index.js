import {combineReducers} from 'redux';
import locations from './locations';
import forecasts from './forecasts';
import submitted from './submitted';

const whether = combineReducers({
  locations,
  forecasts,
  submitted
});

export default whether;