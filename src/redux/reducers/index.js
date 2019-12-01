import { combineReducers } from 'redux';

import {
  RECEIVE_JSON,
  REQUEST_JSON,
  INCREMENT_INDEX,
  DECREMENT_INDEX,
  UPDATE_FIELD,
  UPDATE_FILENAME,
} from '../actions';

const editJSON = (
  state={
    isLoading: false,
    name: 'temp.json',
    data: [
      {
        a: 'hello',
        b: 'doinker',
        c: 'test',
      },
      {
        a: 'bye',
        b: 'doinker',
        c: 'test',
      },
    ],
    index: 0,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_JSON:
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
    case UPDATE_FILENAME:
      return Object.assign({}, state, {
        name: action.payload,
      });
    case UPDATE_FIELD:
      return Object.assign({}, state, {
        data: state.data.map((item, index) => {
          if (index === state.index) {
            item[action.field] = action.value
          }
          return item;
        })
      });
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  editJSON,
});

export default rootReducer;
