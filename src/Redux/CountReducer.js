import * as Count from "./Constants";

export const countReducer = (state = Count.initialCount, action) => {
  switch (action.type) {
    case Count.INCREMENT_COUNT: {
      return { ...state, count: state.count + 1 };
    }
    case Count.DECREMENT_COUNT: {
      return { ...state, count: state.count - 1 };
    }
    case Count.RESET_COUNT: {
      return Count.initialCount;
    }
    default: {
      return state;
    }
  }
};
