import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  users: userReducer,
  // Add other reducers if needed
});

export default rootReducer;