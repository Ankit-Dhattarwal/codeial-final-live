import posts from './Post';
import { combineReducers } from 'redux';
import auth from './auth';

export default combineReducers({
  posts,
  auth,
});
