import { combineReducers } from 'redux';

import { editJSON } from './edit';
import { auth } from './auth';

const rootReducer = combineReducers({
  editJSON,
  auth,
});

export default rootReducer;
