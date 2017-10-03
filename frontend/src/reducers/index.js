import {combineReducers} from 'redux';
import locations from './locations';
import forecasts from './forecasts';
import submitted from './submitted';
import apifetch from './apifetch';

const whether = combineReducers({
  locations,
  forecasts,
  submitted,
  apifetch
});

export default whether;