import { createStore, combineReducers, applyMiddleware } from "redux";
import { countReducer } from "./CountReducer";
import composeWithDevTools from "redux-devtools-extension";
import logger from "redux-logger";
const rootReducer = combineReducers({
  countReducerOne: countReducer,
  countReducerTwo: countReducer,
});

const customLogger = () => {
  alert("Custom logger...!");
};

export const counterStore = createStore(rootReducer);
