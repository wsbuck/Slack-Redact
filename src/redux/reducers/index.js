import { combineReducers } from 'redux';

import {
  RECEIVE_JSON,
  REQUEST_JSON,
  INCREMENT_INDEX,
  DECREMENT_INDEX,
} from '../actions';

const editJSON = (
  state={
    isLoading: false,
    data: [
      {
        a: 'hello',
      },
      {
        a: 'bye',
      },
    ],
    index: 0,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_JSON:
      console.log(action);
      return Object.assign({}, state, {
        isLoading: true,
      });
    case RECEIVE_JSON:
      return Object.assign({}, state, {
        data: action.payload,
        isLoading: false,
        index: 0,
      });
    case INCREMENT_INDEX:
      return Object.assign({}, state, {
        index: state.index + 1,
      });
    case DECREMENT_INDEX:
      return Object.assign({}, state, {
        index: state.index - 1,
      });
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  editJSON,
});

export default rootReducer;
