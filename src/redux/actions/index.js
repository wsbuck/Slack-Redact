export const RECEIVE_JSON = 'RECEIVE_JSON';
export const REQUEST_JSON = 'REQUEST_JSON';
export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_FILENAME = 'UPDATE_FILENAME';

export function receiveJSON(json) {
  return {
    type: RECEIVE_JSON,
    payload: json,
  };
}

export function updateFileName(name) {
  return {
    type: UPDATE_FILENAME,
    payload: name,
  };
}

export function requestJSON(json) {
  return {
    type: REQUEST_JSON,
  };
}

export function incrementIndex() {
  return {
    type: INCREMENT_INDEX,
  };
}

export function decrementIndex() {
  return {
    type: DECREMENT_INDEX,
  };
}

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field: field,
    value: value,
  };
}
