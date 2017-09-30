import { combineReducers } from 'redux';
import locations from './locations';
import todos from './todos';

const whether = combineReducers({
    locations,
    todos
});

export default whether;