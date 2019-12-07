import { combineReducers } from 'redux';

import {
  RECEIVE_JSON,
  REQUEST_JSON,
  INCREMENT_INDEX,
  DECREMENT_INDEX,
  UPDATE_FIELD,
  UPDATE_FILENAME,
  ADD_EXPLANATION,
} from '../actions';

const editJSON = (
  state={
    isLoading: false,
    name: 'temp.json',
    data: [
      {
        a: 'Hello',
        b: 'World',
        c: '!!!!',
      },
      {
        a: 'foo',
        b: 'bar',
        c: 'foobar',
      },
    ],
    index: 0,
    explanations: [['jsonIndex', 'fieldName', 'Explanation']],
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
    case ADD_EXPLANATION:
      return Object.assign({}, state, {
        explanations: [
          ...state.explanations,
          [action.index, action.field, action.explanation]
        ],
      });
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  editJSON,
});

export default rootReducer;
