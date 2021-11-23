import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH": {
      return {
        data: null,
        error: null,
        isLoading: true,
      };
    }
    case "SET_USER": {
      return {
        data: action.payload,
        error: null,
        isLoading: false,
      };
    }
    case "SET_ERROR": {
      return {
        data: [],
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export const userReducer = createStore(reducer, applyMiddleware(thunk));
