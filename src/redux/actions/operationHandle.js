import {
  HANDLE_DIGITS,
  HANDLE_PLUS,
  HANDLE_MINUS,
  HANDLE_MULTIPLICATION,
  HANDLE_DIVISION,
  HANDLE_EQUAL,
} from "../utils/types";

export const digitHanndle = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: HANDLE_DIGITS,
    payload: value,
  });
};

export const handlePlus = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: HANDLE_PLUS,
    payload: value,
  });
};

export const handleMinus = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: HANDLE_MINUS,
    payload: value,
  });
};

export const handleMultipication = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: HANDLE_MULTIPLICATION,
    payload: value,
  });
};

export const handleDivision = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: HANDLE_DIVISION,
    payload: value,
  });
};
export const handleEquel = (value) => (dispatch) => {
  console.log(value);
  dispatch({
    type: HANDLE_EQUAL,
    payload: value,
  });
};
