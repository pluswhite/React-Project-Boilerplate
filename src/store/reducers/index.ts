import { combineReducers } from 'redux';

import todosReducer from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
