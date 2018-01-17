import {combineReducers} from 'redux';
import locations from './locations';
import submitted from './submitted';
import api from './api';

const whether = combineReducers({
  locations,
  submitted,
  api
});

export default whether;