import {combineReducers} from 'redux';
import locations from './locations';
import forecasts from './forecasts';
import submitted from './submitted';
import api from './api';

const whether = combineReducers({
  locations,
  forecasts,
  submitted,
  api
});

export default whether;