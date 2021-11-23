import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

function ReduxThunkChild(props) {
  const { state } = props;
  useEffect(() => {
    props.dispatch();
  }, []);
  return (
    <div>
      {state.isLoading ? (
        <h1>LOADING....</h1>
      ) : state.error ? (
        <h1>{state.error}</h1>
      ) : (
        state.data.map((data) => {
          return <h1>{data.name}</h1>;
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunkChild);
const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_USER", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error });
      });
  };
};
