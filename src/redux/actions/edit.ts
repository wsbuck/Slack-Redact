export const RECEIVE_JSON: string = 'RECEIVE_JSON';
export const REQUEST_JSON: string = 'REQUEST_JSON';
export const INCREMENT_INDEX: string = 'INCREMENT_INDEX';
export const DECREMENT_INDEX: string = 'DECREMENT_INDEX';
export const UPDATE_FIELD: string = 'UPDATE_FIELD';
export const UPDATE_FILENAME: string = 'UPDATE_FILENAME';
export const ADD_EXPLANATION: string = 'ADD_EXPLANATION';
export const TOGGLE_PROCEED: string = 'TOGGLE_PROCEED';
export const SET_PROCEED: string = 'SET_PROCEED';

export function receiveJSON(json: any) {
  return {
    type: RECEIVE_JSON,
    payload: json,
  };
}

export function updateFileName(name: string) {
  return {
    type: UPDATE_FILENAME,
    payload: name,
  };
}

export function requestJSON(json: any) {
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

export function updateField(field: string, value: string | number) {
  return {
    type: UPDATE_FIELD,
    field: field,
    value: value,
  };
}

export function addExplanation(index: number, field: string, explanation: string) {
  return {
    type: ADD_EXPLANATION,
    index: index,
    field: field,
    explanation: explanation,
  };
}

export function toggleProceed() {
  return {
    type: TOGGLE_PROCEED,
  };
}

export function setProceed(proceed: boolean) {
  return {
    type: SET_PROCEED,
    proceed: proceed,
  };
}
