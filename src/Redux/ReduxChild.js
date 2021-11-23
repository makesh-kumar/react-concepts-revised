import React from "react";
import * as Count from "./Constants";
import { connect, useSelector, useDispatch } from "react-redux";

function ReduxChild(props) {
  const { stateTwo, dispatchTwo } = props;

  //we can use mapStateToProps as alternate for this (see below)
  const stateOne = useSelector((state) => state.countReducerOne);

  //we can use mapDispatchToProps as alternate for this (see below)
  const dispatchOne = useDispatch();

  return (
    <div>
      <hr />
      <h2>Count ONE :- {stateOne.count}</h2>

      <button onClick={() => dispatchOne({ type: Count.INCREMENT_COUNT })}>
        Increment
      </button>

      <button onClick={() => dispatchOne({ type: Count.DECREMENT_COUNT })}>
        Decrement
      </button>

      <button onClick={() => dispatchOne({ type: Count.RESET_COUNT })}>
        Reset
      </button>

      <hr />
      <h2>Count TWO:- {stateTwo.count}</h2>

      <button onClick={() => dispatchTwo({ type: Count.INCREMENT_COUNT })}>
        Increment
      </button>

      <button onClick={() => dispatchTwo({ type: Count.DECREMENT_COUNT })}>
        Decrement
      </button>

      <button onClick={() => dispatchTwo({ type: Count.RESET_COUNT })}>
        Reset
      </button>
    </div>
  );
}

// useSelector Hook is alternate for this
const mapStateToProps = (state) => {
  console.log(state);
  return {
    stateTwo: state.countReducerTwo,
  };
};

// useDispatch Hook is alternate for this
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    dispatchTwo: dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxChild);
